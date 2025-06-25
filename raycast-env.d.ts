/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Windows Terminal Settings Path - Path to Windows Terminal settings.json file */
  "settingsPath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `open-profile` command */
  export type OpenProfile = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `open-profile` command */
  export type OpenProfile = {}
}

