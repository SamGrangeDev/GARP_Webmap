ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15233566.680914, -4278433.839671, 15702899.139122, -4040508.357385]);
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
var format_GARPLGA_2 = new ol.format.GeoJSON();
var features_GARPLGA_2 = format_GARPLGA_2.readFeatures(json_GARPLGA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPLGA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPLGA_2.addFeatures(features_GARPLGA_2);
var lyr_GARPLGA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPLGA_2, 
                style: style_GARPLGA_2,
                popuplayertitle: "GARP-LGA",
                interactive: false,
                title: '<img src="styles/legend/GARPLGA_2.png" /> GARP-LGA'
            });
var format_GreaterAdelaidePlanningRegion_3 = new ol.format.GeoJSON();
var features_GreaterAdelaidePlanningRegion_3 = format_GreaterAdelaidePlanningRegion_3.readFeatures(json_GreaterAdelaidePlanningRegion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreaterAdelaidePlanningRegion_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreaterAdelaidePlanningRegion_3.addFeatures(features_GreaterAdelaidePlanningRegion_3);
var lyr_GreaterAdelaidePlanningRegion_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreaterAdelaidePlanningRegion_3, 
                style: style_GreaterAdelaidePlanningRegion_3,
                popuplayertitle: "Greater Adelaide Planning Region",
                interactive: false,
                title: '<img src="styles/legend/GreaterAdelaidePlanningRegion_3.png" /> Greater Adelaide Planning Region'
            });
var lyr_GARP_Vision_Map_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "GARP_Vision_Map",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GARP_Vision_Map_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15372679.455643, -4254497.114694, 15542546.659308, -4054080.670844]
                            })
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
var format_FutureGreenfieldSupplyTwoWells_7 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyTwoWells_7 = format_FutureGreenfieldSupplyTwoWells_7.readFeatures(json_FutureGreenfieldSupplyTwoWells_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyTwoWells_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyTwoWells_7.addFeatures(features_FutureGreenfieldSupplyTwoWells_7);
var lyr_FutureGreenfieldSupplyTwoWells_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyTwoWells_7, 
                style: style_FutureGreenfieldSupplyTwoWells_7,
                popuplayertitle: "Future Greenfield Supply - Two Wells",
                interactive: true,
                title: '<img src="styles/legend/FutureGreenfieldSupplyTwoWells_7.png" /> Future Greenfield Supply - Two Wells'
            });
var group_FutureGreenfield = new ol.layer.Group({
                                layers: [lyr_FutureGreenfieldSupplyoutsideEFPA_5,lyr_FutureGreenfieldSupplyinEFPA_6,lyr_FutureGreenfieldSupplyTwoWells_7,],
                                fold: "open",
                                title: "Future Greenfield"});
var group_RegionalPlan = new ol.layer.Group({
                                layers: [lyr_GARPLGA_2,lyr_GreaterAdelaidePlanningRegion_3,lyr_GARP_Vision_Map_4,],
                                fold: "open",
                                title: "Regional Plan"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_GARPLGA_2.setVisible(true);lyr_GreaterAdelaidePlanningRegion_3.setVisible(true);lyr_GARP_Vision_Map_4.setVisible(false);lyr_FutureGreenfieldSupplyoutsideEFPA_5.setVisible(false);lyr_FutureGreenfieldSupplyinEFPA_6.setVisible(false);lyr_FutureGreenfieldSupplyTwoWells_7.setVisible(true);
var layersList = [group_BaseLayer,group_RegionalPlan,group_FutureGreenfield];
lyr_GARPLGA_2.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_GreaterAdelaidePlanningRegion_3.set('fieldAliases', {'objectid': 'OBJECTID', 'region': 'region', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Gross_HA': 'Gross_HA', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', 'Company': 'Company', 'Gross_Ha': 'Gross_Ha', });
lyr_FutureGreenfieldSupplyTwoWells_7.set('fieldAliases', {'fid': 'fid', 'planparcel': 'planparcel', 'Address': 'Address', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', 'Company': 'Company', 'Gross_Ha': 'Gross_Ha', 'Land Owner Unique': 'Land Owner Unique', });
lyr_GARPLGA_2.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_GreaterAdelaidePlanningRegion_3.set('fieldImages', {'objectid': 'TextEdit', 'region': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Gross_HA': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', 'Company': 'TextEdit', 'Gross_Ha': 'TextEdit', });
lyr_FutureGreenfieldSupplyTwoWells_7.set('fieldImages', {'fid': 'TextEdit', 'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', 'Company': 'TextEdit', 'Gross_Ha': 'TextEdit', 'Land Owner Unique': 'TextEdit', });
lyr_GARPLGA_2.set('fieldLabels', {'fid': 'inline label - always visible', 'LGA_CODE24': 'inline label - always visible', 'LGA_NAME24': 'inline label - always visible', 'STE_CODE21': 'inline label - always visible', 'STE_NAME21': 'inline label - always visible', 'AUS_CODE21': 'inline label - always visible', 'AUS_NAME21': 'inline label - always visible', 'AREASQKM': 'inline label - always visible', 'LOCI_URI21': 'inline label - always visible', });
lyr_GreaterAdelaidePlanningRegion_3.set('fieldLabels', {'objectid': 'no label', 'region': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', });
lyr_FutureGreenfieldSupplyoutsideEFPA_5.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Gross_HA': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyinEFPA_6.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Lead Link': 'inline label - visible with data', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', 'Company': 'inline label - always visible', 'Gross_Ha': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyTwoWells_7.set('fieldLabels', {'fid': 'hidden field', 'planparcel': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Lead Link': 'inline label - visible with data', 'Land Owner': 'inline label - visible with data', 'Contact no': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Company': 'inline label - visible with data', 'Gross_Ha': 'inline label - visible with data', 'Land Owner Unique': 'hidden field', });
lyr_FutureGreenfieldSupplyTwoWells_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});