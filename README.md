# Carbstatus

![carbstatus logo](https://raw.githubusercontent.com/gendant/carbstatus-sdk/master/src/assets/cs-beta.png "Carbstatus")

> Leverage carbon awareness to reduce carbon emissions

[![carbstatus-info](https://img.shields.io/badge/carbstatus.info-view-brightgreen)](https://carbstatus.info)
[![npm](https://badgen.now.sh/npm/v/@gendant/carbstatus-sdk)](https://www.npmjs.com/package/@gendant/carbstatus-sdk)

- [About](#about)
- [How?](#how)
- [Carbstatus SDK](#carbstatus-sdk)
- [Carbstatus API](#carbstatus-api)
- [Carbstatus Beta Program](#carbstatus-beta-program)
- [License](#license)

# About

According to [The Green Software Foundation](https://greensoftware.foundation), carbon-aware computing involves shifting compute to times and places where the carbon intensity of the grid results in lower carbon emissions. 

Businesses can now leverage carbon-aware computing as an innovative and viable option to reduce the carbon emissions created by their software.

# How?

Currently, we rely on [WattTime](https://www.watttime.org) as our data provider. 
Carbon data is updated every 5 minutes for each of the supported WattTime locations. This allow us to get both instant carbon emissions and the 24h time window data forecast.
We expose this data in our API and build our services around it to extend carbon awareness development everywhere.


# Carbstatus SDK

> **Important** While stable and working nicely for most of the apps, the carbstatus-sdk is still in BETA stage and we thank you that you report to us any bug you may find

The sdk is meant to sustain carbon awareness web development.

As of now, the main features are:

- embed the carbstatus js widget
- import carbstatus data into your app

...but more features will come soon!

## Embed the carbstatus widget 

You can embed the carbstatus widget in any website (SPAs, web apps, CMS), by adding the following code snippet in the `head` of your `index.html` file and replacing the `data-domain` attribute with your domain.

```html
<script defer data-domain="carbstatus.info" src="https://unpkg.com/@gendant/carbstatus-sdk/carbstatus.min.js"></script>

```

## Using carbstatus data in your app

 If you only want carbstatus data but not the widget, set the `data-widget="false"` attribute in the above script tag.

```ts

interface IIndexData{
    time: number,
    nvalue: number
    value: number
}

const carbstatusIndexData:IIndexData = globalThis.carbstatus


```


# Carbstatus API

Main endpoint: [https://api.carbstatus.info/v1](https://api.carbstatus.info/v1)

## Methods

- **/index**

  Returns the normalized carbstatus index for a given domain. 

  Query params:
  - `l` <[required]>: a domain name

  If Status Code 200 -> Returns a JSON object:

```js
  {
    time: number // timestamp when the data will next update
    nvalue: number // 0-100 normalized carbstatus index
    value: number // MOER value in gCO2 / MWh
  }
```

- **/index-by-ip**

  Returns the normalized carbstatus index for a given ip. 

  Query params:
  - `i` <[required]>: an ip address

  If Status Code 200 -> Returns a JSON object:

```js
  {
    time: number // timestamp when the data will next update
    nvalue: number // 0-100 normalized carbstatus index
    value: number // MOER value in gCO2 / MWh
  }
```


- **/index-ext**


  Returns the 24h forecast normalized carbstatus index for a given domain.

  Query params:
  - `l` <[required]>: a domain name


  If Status Code 200 -> Returns a JSON object:

```js
  {
    time: number // timestamp when the data will next update
    forecast: number[] // 24h forecast normalized carbstatus indexes with a 5min step
    oindex: number // index in the forecast array when is the optimal time 
    ovalue: number // optimal (best) MOER value in gCO2 / MWh
    uvalue: number // suboptimal (worse) MOER value in gCO2 / MWh
  }
```

# Carbstatus Beta Program

The Carbstatus beta program will let you develop applications for:

- [carbon aware edge computing](https://github.com/metatarz/carbstatus-cloudflare-worker-example)
- innovative carbon aware applications
- shifting demand and posponing automated processes to lower carbstatus indexes

Also, selected participants will be granted access to our:
- API
- SDK
- custom carbstatus page with personalised logo and domain (eg: https://carbstatus.info/?url=example.org)
- team support


Take this opportunity to join our beta program and get early access to the full list of features.

Send us an email to `carbstatus[at]gendant.com` with few words on how you intend to use carbstatus and we'll reach to you soon.

# License

MIT 
Copyright (c) 2023 Gendant Digital S.L




 










