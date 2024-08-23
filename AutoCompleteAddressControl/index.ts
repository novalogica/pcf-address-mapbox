import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AddressInputControl, { IAddressInputControlProps } from "./AddressControl";
import { IAddress } from "./interfaces/IAddress";
type IControlContext = ComponentFramework.Context<IInputs>;

export class AutoCompleteAddressControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private container: HTMLDivElement;
	private notifyOutputChanged: () => void;
    private address: IAddress;

    constructor()
    {
    }

    public init(context: IControlContext, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;
		this.renderControl(context);
    }

    public updateView(context: IControlContext): void
    {
        this.renderControl(context);
    }

    private renderControl(context: IControlContext): void {
        const props: IAddressInputControlProps = {
            mapboxKey: context.parameters.mapboxApiKey.raw ?? "",
            street: context.parameters.street.raw ?? "",
            onAddressConfirmed: this.handleAddressConfirmation
        }

		ReactDOM.render(React.createElement(AddressInputControl, props), this.container);
	}

    private handleAddressConfirmation = (address: IAddress) => {
        this.address = address;
        this.notifyOutputChanged();
    }

    public getOutputs(): IOutputs
    {
        return {
            street : this.address.street,
            city: this.address.city,
            state: this.address.state,
            zipcode: this.address.zipcode,
            country: this.address.country
        };
    }

    public destroy(): void
    {
    }
}
