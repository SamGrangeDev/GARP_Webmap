ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15326206.454794, -4242710.423787, 15618210.210857, -4089855.784857]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_GARPLegend_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "GARP Legend",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GARPLegend_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15549488.186689, -4165639.114452, 15596555.623020, -4090025.362945]
                            })
                        });
var lyr_GARP_Vision_Map_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GARP_Vision_Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GARP_Vision_Map_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15372679.455643, -4254497.114694, 15542546.659308, -4054080.670844]
                            })
                        });
var format_GARPLGA_4 = new ol.format.GeoJSON();
var features_GARPLGA_4 = format_GARPLGA_4.readFeatures(json_GARPLGA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPLGA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPLGA_4.addFeatures(features_GARPLGA_4);
var lyr_GARPLGA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPLGA_4, 
                style: style_GARPLGA_4,
                popuplayertitle: "GARP-LGA",
                interactive: false,
                title: '<img src="styles/legend/GARPLGA_4.png" /> GARP-LGA'
            });
var format_FutureGreenfieldSupplyoutsideEFPA_5 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyoutsideEFPA_5 = format_FutureGreenfieldSupplyoutsideEFPA_5.readFeatures(json_FutureGreenfieldSupplyoutsideEFPA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyoutsideEFPA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyoutsideEFPA_5.addFeatures(features_FutureGreenfieldSupplyoutsideEFPA_5);
var lyr_FutureGreenfieldSupplyoutsideEFPA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyoutsideEFPA_5, 
                style: style_FutureGreenfieldSupplyoutsideEFPA_5,
                popuplayertitle: "Future Greenfield Supply outside EFPA",
                interactive: true,
                title: '<img src="styles/legend/FutureGreenfieldSupplyoutsideEFPA_5.png" /> Future Greenfield Supply outside EFPA'
            });
var format_FutureGreenfieldSupplyinEFPA_6 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyinEFPA_6 = format_FutureGreenfieldSupplyinEFPA_6.readFeatures(json_FutureGreenfieldSupplyinEFPA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyinEFPA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyinEFPA_6.addFeatures(features_FutureGreenfieldSupplyinEFPA_6);
var lyr_FutureGreenfieldSupplyinEFPA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyinEFPA_6, 
                style: style_FutureGreenfieldSupplyinEFPA_6,
                popuplayertitle: "Future Greenfield Supply in EFPA",
                interactive: true,
                title: '<img src="styles/legend/FutureGreenfieldSupplyinEFPA_6.png" /> Future Greenfield Supply in EFPA'
            });
var group_FutureGreenfield = new ol.layer.Group({
                                layers: [lyr_GARPLGA_4,lyr_FutureGreenfieldSupplyoutsideEFPA_5,lyr_FutureGreenfieldSupplyinEFPA_6,],
                                fold: "open",
                                title: "Future Greenfield"});
var group_RegionalPlan = new ol.layer.Group({
                                layers: [lyr_GARPLegend_2,lyr_GARP_Vision_Map_3,],
                                fold: "open",
                                title: "Regional Plan"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_GARPLegend_2.setVisible(false);lyr_GARP_Vision_Map_3.setVisible(true);lyr_GARPLGA_4.setVisible(true);lyr_FutureGreenfieldSupplyoutsideEFPA_5.setVisible(false);lyr_FutureGreenfieldSupplyinEFPA_6.setVisible(false);
var layersList = [group_BaseLayer,group_RegionalPlan,group_FutureGreenfield];
lyr_GARPLGA_4.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Gross_HA': 'Gross_HA', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', 'Company': 'Company', 'Gross_Ha': 'Gross_Ha', });
lyr_GARPLGA_4.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Gross_HA': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', 'Company': 'TextEdit', 'Gross_Ha': 'TextEdit', });
lyr_GARPLGA_4.set('fieldLabels', {'fid': 'inline label - always visible', 'LGA_CODE24': 'inline label - always visible', 'LGA_NAME24': 'inline label - always visible', 'STE_CODE21': 'inline label - always visible', 'STE_NAME21': 'inline label - always visible', 'AUS_CODE21': 'inline label - always visible', 'AUS_NAME21': 'inline label - always visible', 'AREASQKM': 'inline label - always visible', 'LOCI_URI21': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Gross_HA': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', 'Company': 'inline label - always visible', 'Gross_Ha': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyinEFPA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});