import * as React from 'react';
import { SearchBox } from '@mapbox/search-js-react';
import { IInputs } from './generated/ManifestTypes';
import { IAddress } from './interfaces/IAddress';

export interface IAddressInputControlProps {
  mapboxKey: string,
  onAddressConfirmed: (address: IAddress) => void
}

const AddressControl = ({ mapboxKey, onAddressConfirmed } : IAddressInputControlProps) => {
  const handleChange = (d: any) => {
    const address = d.features[0]

    const result: IAddress = {
      street: address.properties.context.address?.name ?? address.properties.name ?? "",
      state: address.properties.context.place?.name ?? address.properties.context.locality?.name ?? "",
      city: address.properties.context.region?.name ?? "",
      zipcode: address.properties.context.postcode?.name ?? "",
      country: address.properties.context.country?.name ?? ""
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
