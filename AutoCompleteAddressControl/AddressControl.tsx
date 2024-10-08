import * as React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { OutputAddress } from './interfaces/address';
import { MapboxResponse } from './interfaces/mapbox';

export interface IAddressInputControlProps {
  mapboxKey: string,
  street: string,
  onAddressConfirmed: (address: OutputAddress) => void
}

const AddressControl = ({ mapboxKey, street, onAddressConfirmed } : IAddressInputControlProps) => {
  const [streetAddress, setAddress] = React.useState(street);

  const onAddressSelected = (d: MapboxResponse) => {
    const addressProperties = d.features[0]?.properties;

    const result: OutputAddress = {
      street: addressProperties.context.address?.name ?? addressProperties.name ?? "",
      state: addressProperties.context.place?.name ?? addressProperties.context.locality?.name ?? "",
      city: addressProperties.context.region?.name ?? "",
      zipcode: addressProperties.context.postcode?.name ?? "",
      country: addressProperties.context.country?.name ?? ""
    };

    onAddressConfirmed(result);
    setAddress(result.street);
  };
  
  return (
    <div style={{ padding: '1px'}}>
      <SearchBox 
        placeholder="Search address..." 
        accessToken={mapboxKey} 
        onRetrieve={onAddressSelected}
        value={streetAddress}
      />
    </div>
  );
}

export default AddressControl
