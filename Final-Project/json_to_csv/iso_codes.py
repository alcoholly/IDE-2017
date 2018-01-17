#!/usr/bin/env python
# -*- coding: utf-8 -*-

iso_codes = {
    u'canada': u'CAN',
    u'turkmenistan': u'TKM',
    u'montenegro': u'MNE',
    u'saint pierre and miquelon': u'SPM',
    u'ethiopia': u'ETH',
    u'swaziland': u'SWZ',
    u'cameroon': u'CMR',
    u'burkina faso': u'BFA',
    u'united states minor outlying islands': u'UMI',
    u'cocos (keeling) islands': u'CCK',
    u'bosnia and herzegovina': u'BIH',
    u'russian federation': u'RUS',
    u'bonaire, sint eustatius and saba': u'BES',
    u'dominica': u'DMA',
    u'liberia': u'LBR',
    u'maldives': u'MDV',
    u'seychelles': u'SYC',
    u'monaco': u'MCO',
    u'wallis and futuna': u'WLF',
    u'jersey': u'JEY',
    u"côte d'ivoire": u'CIV',
    u'svalbard and jan mayen': u'SJM',
    u'macao': u'MAC',
    u'turkey': u'TUR',
    u'afghanistan': u'AFG',
    u'taiwan': u'TWN',
    u'slovakia': u'SVK',
    u'vanuatu': u'VUT',
    u'nauru': u'NRU',
    u'norway': u'NOR',
    u'malawi': u'MWI',
    u'congo, the democratic republic of the': u'COD',
    u'united states': u'USA',
    u'micronesia, federated states of': u'FSM',
    u'antigua and barbuda': u'ATG',
    u'dominican republic': u'DOM',
    u'bahrain': u'BHR',
    u'cayman islands': u'CYM',
    u'libya': u'LBY',
    u'finland': u'FIN',
    u'central african republic': u'CAF',
    u'liechtenstein': u'LIE',
    u'portugal': u'PRT',
    u'fiji': u'FJI',
    u'venezuela': u'VEN',
    u'malaysia': u'MYS',
    u'Åland islands': u'ALA',
    u'pitcairn': u'PCN',
    u'kuwait': u'KWT',
    u'panama': u'PAN',
    u'korea, republic of': u'KOR',
    u'costa rica': u'CRI',
    u'luxembourg': u'LUX',
    u'bahamas': u'BHS',
    u'gibraltar': u'GIB',
    u'ireland': u'IRL',
    u'palau': u'PLW',
    u'nigeria': u'NGA',
    u'ecuador': u'ECU',
    u'australia': u'AUS',
    u'el salvador': u'SLV',
    u'tuvalu': u'TUV',
    u'thailand': u'THA',
    u'belize': u'BLZ',
    u'hong kong': u'HKG',
    u'sierra leone': u'SLE',
    u'georgia': u'GEO',
    u"lao people's democratic republic": u'LAO',
    u'denmark': u'DNK',
    u'philippines': u'PHL',
    u'morocco': u'MAR',
    u'guernsey': u'GGY',
    u'estonia': u'EST',
    u'curaçao': u'CUW',
    u'lebanon': u'LBN',
    u'uzbekistan': u'UZB',
    u'falkland islands (malvinas)': u'FLK',
    u'colombia': u'COL',
    u'cyprus': u'CYP',
    u'barbados': u'BRB',
    u'madagascar': u'MDG',
    u'italy': u'ITA',
    u'sudan': u'SDN',
    u'bolivia': u'BOL',
    u'nepal': u'NPL',
    u'netherlands': u'NLD',
    u'bermuda': u'BMU',
    u'suriname': u'SUR',
    u'anguilla': u'AIA',
    u'holy see': u'VAT',
    u'israel': u'ISR',
    u'senegal': u'SEN',
    u'papua new guinea': u'PNG',
    u'zimbabwe': u'ZWE',
    u'jordan': u'JOR',
    u'martinique': u'MTQ',
    u'moldova': u'MDA',
    u'mauritania': u'MRT',
    u'trinidad and tobago': u'TTO',
    u'latvia': u'LVA',
    u'japan': u'JPN',
    u'guadeloupe': u'GLP',
    u'mexico': u'MEX',
    u'serbia': u'SRB',
    u'united kingdom': u'GBR',
    u'christmas island': u'CXR',
    u"korea, democratic people's republic of": u'PRK',
    u'paraguay': u'PRY',
    u'gabon': u'GAB',
    u'botswana': u'BWA',
    u'sao tome and principe': u'STP',
    u'lithuania': u'LTU',
    u'cambodia': u'KHM',
    u'saint helena, ascension and tristan da cunha': u'SHN',
    u'aruba': u'ABW',
    u'argentina': u'ARG',
    u'ghana': u'GHA',
    u'saudi arabia': u'SAU',
    u'american samoa': u'ASM',
    u'slovenia': u'SVN',
    u'guatemala': u'GTM',
    u'guinea': u'GIN',
    u'virgin islands, british': u'VGB',
    u'spain': u'ESP',
    u'jamaica': u'JAM',
    u'oman': u'OMN',
    u'cape verde': u'CPV',
    u'albania': u'ALB',
    u'french guiana': u'GUF',
    u'niue': u'NIU',
    u'new zealand': u'NZL',
    u'yemen': u'YEM',
    u'pakistan': u'PAK',
    u'greenland': u'GRL',
    u'samoa': u'WSM',
    u'british indian ocean territory': u'IOT',
    u'equatorial guinea': u'GNQ',
    u'norfolk island': u'NFK',
    u'united arab emirates': u'ARE',
    u'guam': u'GUM',
    u'india': u'IND',
    u'azerbaijan': u'AZE',
    u'lesotho': u'LSO',
    u'saint vincent and the grenadines': u'VCT',
    u'kenya': u'KEN',
    u'northern mariana islands': u'MNP',
    u'eritrea': u'ERI',
    u'solomon islands': u'SLB',
    u'viet nam': u'VNM',
    u'saint lucia': u'LCA',
    u'san marino': u'SMR',
    u'mongolia': u'MNG',
    u'macedonia': u'MKD',
    u'syrian arab republic': u'SYR',
    u'rwanda': u'RWA',
    u'somalia': u'SOM',
    u'peru': u'PER',
    u'cook islands': u'COK',
    u'benin': u'BEN',
    u'cuba': u'CUB',
    u'saint kitts and nevis': u'KNA',
    u'togo': u'TGO',
    u'china': u'CHN',
    u'armenia': u'ARM',
    u'ukraine': u'UKR',
    u'tonga': u'TON',
    u'western sahara': u'ESH',
    u'indonesia': u'IDN',
    u'mauritius': u'MUS',
    u'sweden': u'SWE',
    u'mali': u'MLI',
    u'bulgaria': u'BGR',
    u'palestine, state of': u'PSE',
    u'romania': u'ROU',
    u'angola': u'AGO',
    u'french southern territories': u'ATF',
    u'chad': u'TCD',
    u'south africa': u'ZAF',
    u'tokelau': u'TKL',
    u'tajikistan': u'TJK',
    u'south georgia and the south sandwich islands': u'SGS',
    u'brunei darussalam': u'BRN',
    u'qatar': u'QAT',
    u'austria': u'AUT',
    u'mozambique': u'MOZ',
    u'uganda': u'UGA',
    u'hungary': u'HUN',
    u'niger': u'NER',
    u'brazil': u'BRA',
    u'faroe islands': u'FRO',
    u'virgin islands, u.s.': u'VIR',
    u'bangladesh': u'BGD',
    u'belarus': u'BLR',
    u'algeria': u'DZA',
    u'czech republic': u'CZE',
    u'marshall islands': u'MHL',
    u'chile': u'CHL',
    u'puerto rico': u'PRI',
    u'belgium': u'BEL',
    u'kiribati': u'KIR',
    u'haiti': u'HTI',
    u'iraq': u'IRQ',
    u'gambia': u'GMB',
    u'namibia': u'NAM',
    u'french polynesia': u'PYF',
    u'guinea-bissau': u'GNB',
    u'switzerland': u'CHE',
    u'grenada': u'GRD',
    u'france': u'FRA',
    u'isle of man': u'IMN',
    u'tanzania, united republic of': u'TZA',
    u'uruguay': u'URY',
    u'saint barthélemy': u'BLM',
    u'bouvet island': u'BVT',
    u'egypt': u'EGY',
    u'djibouti': u'DJI',
    u'heard island and mcdonald islands': u'HMD',
    u'timor-leste': u'TLS',
    u'burundi': u'BDI',
    u'turks and caicos islands': u'TCA',
    u'saint martin (french part)': u'MAF',
    u'bhutan': u'BTN',
    u'malta': u'MLT',
    u'iran, islamic republic of': u'IRN',
    u'iceland': u'ISL',
    u'zambia': u'ZMB',
    u'congo': u'COG',
    u'germany': u'DEU',
    u'kazakhstan': u'KAZ',
    u'poland': u'POL',
    u'kyrgyzstan': u'KGZ',
    u'greece': u'GRC',
    u'mayotte': u'MYT',
    u'montserrat': u'MSR',
    u'new caledonia': u'NCL',
    u'andorra': u'AND',
    u'réunion': u'REU',
    u'south sudan': u'SSD',
    u'guyana': u'GUY',
    u'honduras': u'HND',
    u'myanmar': u'MMR',
    u'tunisia': u'TUN',
    u'nicaragua': u'NIC',
    u'singapore': u'SGP',
    u'antarctica': u'ATA',
    u'sint maarten (dutch part)': u'SXM',
    u'sri lanka': u'LKA',
    u'croatia': u'HRV',
    u'comoros': u'COM',
}
