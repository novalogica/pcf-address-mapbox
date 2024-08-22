import * as React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { IAddress } from './interfaces/IAddress';

export interface IAddressInputControlProps {
  mapboxKey: string,
  onAddressConfirmed: (address: IAddress) => void
}

const AddressControl = ({ mapboxKey, onAddressConfirmed } : IAddressInputControlProps) => {
  const handleChange = (d: any) => {
    const addressProperties = d.features[0]?.properties;

    const result: IAddress = {
      street: addressProperties.context.address?.name ?? addressProperties.name ?? "",
      state: addressProperties.context.place?.name ?? addressProperties.context.locality?.name ?? "",
      city: addressProperties.context.region?.name ?? "",
      zipcode: addressProperties.context.postcode?.name ?? "",
      country: addressProperties.context.country?.name ?? ""
    };

    onAddressConfirmed(result);
  };
  
  return (
    <SearchBox 
      placeholder="Search address..." 
      accessToken={mapboxKey} 
      onRetrieve={handleChange}
    />
  );
}

export default AddressControl
