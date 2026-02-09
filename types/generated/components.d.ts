import type { Schema, Struct } from "@strapi/strapi";

export interface AtomsHeading extends Struct.ComponentSchema {
  collectionName: "components_atoms_headings";
  info: {
    displayName: "Heading";
  };
  attributes: {
    headingClass: Schema.Attribute.Enumeration<
      [
        "text-size-h1",
        "text-size-h2",
        "text-size-h3",
        "text-size-h4",
        "text-size-h5",
        "text-size-h6"
      ]
    >;
    headingLevel: Schema.Attribute.Enumeration<["one", "two", "three", "four", "five", "six"]> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"one">;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AtomsInputs extends Struct.ComponentSchema {
  collectionName: "components_atoms_inputs";
  info: {
    displayName: "Inputs";
  };
  options: {
    privateAttributes: true;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
  };
  attributes: {
    checkboxes: Schema.Attribute.Component<"atoms.multiple-checkboxes", true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    email: Schema.Attribute.Component<"form.email", false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    reset: Schema.Attribute.Component<"form.reset-button", false>;
    type: Schema.Attribute.Enumeration<
      [
        "checkbox",
        "date",
        "email",
        "file",
        "hidden",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "textarea",
        "terms",
        "url"
      ]
    >;
  };
}

export interface AtomsMultipleCheckboxes extends Struct.ComponentSchema {
  collectionName: "components_atoms_multiple_checkboxes";
  info: {
    displayName: "Checkboxes";
  };
  options: {
    privateAttributes: true;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    value: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
  };
}

export interface FormEmail extends Struct.ComponentSchema {
  collectionName: "components_form_emails";
  info: {
    displayName: "Email";
    icon: "envelop";
  };
  attributes: {};
}

export interface FormReset extends Struct.ComponentSchema {
  collectionName: "components_form_resets";
  info: {
    displayName: "reset";
    icon: "envelop";
  };
  attributes: {};
}

export interface FormResetButton extends Struct.ComponentSchema {
  collectionName: "components_form_reset_buttons";
  info: {
    displayName: "Reset Button";
    icon: "envelop";
  };
  attributes: {};
}

export interface MoleculesCard extends Struct.ComponentSchema {
  collectionName: "components_molecules_cards";
  info: {
    displayName: "Card";
    icon: "cloud";
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    heading: Schema.Attribute.Component<"atoms.heading", false>;
    image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MoleculesForm extends Struct.ComponentSchema {
  collectionName: "components_molecules_forms";
  info: {
    displayName: "Form";
    icon: "cloud";
  };
  attributes: {
    byline: Schema.Attribute.Text;
    formConfig: Schema.Attribute.Component<"shared.form-settings", false> &
      Schema.Attribute.Required;
    inputs: Schema.Attribute.Component<"atoms.inputs", true>;
    title: Schema.Attribute.Component<"atoms.heading", false>;
  };
}

export interface MoleculesSocials extends Struct.ComponentSchema {
  collectionName: "components_molecules_socials";
  info: {
    displayName: "Socials";
    icon: "cloud";
  };
  attributes: {};
}

export interface OrganismsBanner extends Struct.ComponentSchema {
  collectionName: "components_organisms_banners";
  info: {
    displayName: "Banner";
    icon: "apps";
  };
  attributes: {
    image: Schema.Attribute.Media<"images">;
    title: Schema.Attribute.Component<"atoms.heading", false> & Schema.Attribute.Required;
  };
}

export interface SharedFormSettings extends Struct.ComponentSchema {
  collectionName: "components_shared_form_settings";
  info: {
    displayName: "Form Configuration";
    icon: "information";
  };
  attributes: {
    action: Schema.Attribute.String;
    autocomplete: Schema.Attribute.Boolean;
    enctype: Schema.Attribute.Enumeration<
      ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]
    >;
    method: Schema.Attribute.Enumeration<["post", "get", "dialog"]> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"post">;
    name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
    novalidate: Schema.Attribute.Boolean;
    target: Schema.Attribute.Enumeration<["_self", "_blank", "_parent", "_top", "_unfencedTop"]>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "Seo";
    icon: "allergies";
    name: "Seo";
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<"images">;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {
    files: Schema.Attribute.Media<"images", true>;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "atoms.heading": AtomsHeading;
      "atoms.inputs": AtomsInputs;
      "atoms.multiple-checkboxes": AtomsMultipleCheckboxes;
      "form.email": FormEmail;
      "form.reset": FormReset;
      "form.reset-button": FormResetButton;
      "molecules.card": MoleculesCard;
      "molecules.form": MoleculesForm;
      "molecules.socials": MoleculesSocials;
      "organisms.banner": OrganismsBanner;
      "shared.form-settings": SharedFormSettings;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
    }
  }
}
