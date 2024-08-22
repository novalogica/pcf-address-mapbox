# Mapbox Auto-Complete Address Control

![](https://github.com/novalogica/pcf-address-mapbox/blob/v0.0.1/screenshots/address_search.png)


## Usage

To use this control, you can add the custom control (for example) to "Address 1: Street 1".

Once the control is added, you need to provide the following fields:


![](https://github.com/novalogica/pcf-address-mapbox/blob/main/screenshots/address-bound-fields.png)

| Property | Description    |
| :---:   | :---: |
| Mapbox Api Key | Provide Mapbox API Key  |
| Street | The field where the street name will be stored and the bounded attribute   |
| City | The field where the city will be stored   |
| State | The field where the state will be stored   |
| Zipcode | The field where the zipcode will be stored   |
| Country | 	The field where the country will be stored   |



### Deploy
In order to deploy to your environment you'll need to run this commands: 
   #### 1. Create your authentication profile using the pac auth create command
      pac auth create --url https://xyz.crm.dynamics.com 

   #### 2. If you have previously created an authentication profile, you can view all the existing profiles using the pac auth list command
      pac auth list
   #### 3. To switch between the previously created authentication profiles, use the pac auth select command:
      pac auth select --index <index of the active profile>
   #### 4. Ensure that you have a valid connection and push the component
      pac pcf push -pp <your publisher prefix>
   