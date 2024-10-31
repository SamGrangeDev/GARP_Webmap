var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CharacterPreservationDistrict_2 = new ol.format.GeoJSON();
var features_CharacterPreservationDistrict_2 = format_CharacterPreservationDistrict_2.readFeatures(json_CharacterPreservationDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharacterPreservationDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterPreservationDistrict_2.addFeatures(features_CharacterPreservationDistrict_2);
var lyr_CharacterPreservationDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterPreservationDistrict_2, 
                style: style_CharacterPreservationDistrict_2,
                popuplayertitle: "Character Preservation District",
                interactive: false,
                title: '<img src="styles/legend/CharacterPreservationDistrict_2.png" /> Character Preservation District'
            });
var format_EnvironmentandFoodProductionArea_3 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_3 = format_EnvironmentandFoodProductionArea_3.readFeatures(json_EnvironmentandFoodProductionArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_3.addFeatures(features_EnvironmentandFoodProductionArea_3);
var lyr_EnvironmentandFoodProductionArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_3, 
                style: style_EnvironmentandFoodProductionArea_3,
                popuplayertitle: "Environment and Food Production Area",
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_3.png" /> Environment and Food Production Area'
            });
var format_OpenSpaceNetworkGreenSpace_4 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenSpace_4 = format_OpenSpaceNetworkGreenSpace_4.readFeatures(json_OpenSpaceNetworkGreenSpace_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenSpace_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenSpace_4.addFeatures(features_OpenSpaceNetworkGreenSpace_4);
var lyr_OpenSpaceNetworkGreenSpace_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenSpace_4, 
                style: style_OpenSpaceNetworkGreenSpace_4,
                popuplayertitle: "Open Space Network - Green Space",
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenSpace_4.png" /> Open Space Network - Green Space'
            });
var format_OpenSpaceNetworkGreenWays_5 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenWays_5 = format_OpenSpaceNetworkGreenWays_5.readFeatures(json_OpenSpaceNetworkGreenWays_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenWays_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenWays_5.addFeatures(features_OpenSpaceNetworkGreenWays_5);
var lyr_OpenSpaceNetworkGreenWays_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenWays_5, 
                style: style_OpenSpaceNetworkGreenWays_5,
                popuplayertitle: "Open Space Network - Green Ways",
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenWays_5.png" /> Open Space Network - Green Ways'
            });
var format_InterUrbanBreaks_6 = new ol.format.GeoJSON();
var features_InterUrbanBreaks_6 = format_InterUrbanBreaks_6.readFeatures(json_InterUrbanBreaks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterUrbanBreaks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterUrbanBreaks_6.addFeatures(features_InterUrbanBreaks_6);
var lyr_InterUrbanBreaks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterUrbanBreaks_6, 
                style: style_InterUrbanBreaks_6,
                popuplayertitle: "Inter-Urban Breaks",
                interactive: false,
                title: '<img src="styles/legend/InterUrbanBreaks_6.png" /> Inter-Urban Breaks'
            });
var format_NorthernParkLands_7 = new ol.format.GeoJSON();
var features_NorthernParkLands_7 = format_NorthernParkLands_7.readFeatures(json_NorthernParkLands_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernParkLands_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernParkLands_7.addFeatures(features_NorthernParkLands_7);
var lyr_NorthernParkLands_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernParkLands_7, 
                style: style_NorthernParkLands_7,
                popuplayertitle: "Northern Park Lands",
                interactive: false,
                title: '<img src="styles/legend/NorthernParkLands_7.png" /> Northern Park Lands'
            });
var format_FutureGreenfieldSupplyinEFPA_8 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyinEFPA_8 = format_FutureGreenfieldSupplyinEFPA_8.readFeatures(json_FutureGreenfieldSupplyinEFPA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyinEFPA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyinEFPA_8.addFeatures(features_FutureGreenfieldSupplyinEFPA_8);
var lyr_FutureGreenfieldSupplyinEFPA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyinEFPA_8, 
                style: style_FutureGreenfieldSupplyinEFPA_8,
                popuplayertitle: "Future Greenfield Supply in EFPA",
                interactive: true,
                title: '<img src="styles/legend/FutureGreenfieldSupplyinEFPA_8.png" /> Future Greenfield Supply in EFPA'
            });
var format_FutureGreenfieldSupplyoutsideEFPA_9 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyoutsideEFPA_9 = format_FutureGreenfieldSupplyoutsideEFPA_9.readFeatures(json_FutureGreenfieldSupplyoutsideEFPA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyoutsideEFPA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyoutsideEFPA_9.addFeatures(features_FutureGreenfieldSupplyoutsideEFPA_9);
var lyr_FutureGreenfieldSupplyoutsideEFPA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyoutsideEFPA_9, 
                style: style_FutureGreenfieldSupplyoutsideEFPA_9,
                popuplayertitle: "Future Greenfield Supply outside EFPA",
                interactive: true,
                title: '<img src="styles/legend/FutureGreenfieldSupplyoutsideEFPA_9.png" /> Future Greenfield Supply outside EFPA'
            });
var format_StateInnovationPlaces_10 = new ol.format.GeoJSON();
var features_StateInnovationPlaces_10 = format_StateInnovationPlaces_10.readFeatures(json_StateInnovationPlaces_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateInnovationPlaces_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateInnovationPlaces_10.addFeatures(features_StateInnovationPlaces_10);
var lyr_StateInnovationPlaces_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateInnovationPlaces_10, 
                style: style_StateInnovationPlaces_10,
                popuplayertitle: "State Innovation Places",
                interactive: false,
                title: '<img src="styles/legend/StateInnovationPlaces_10.png" /> State Innovation Places'
            });
var format_PrimeIndustrialEmploymentPrecinct_11 = new ol.format.GeoJSON();
var features_PrimeIndustrialEmploymentPrecinct_11 = format_PrimeIndustrialEmploymentPrecinct_11.readFeatures(json_PrimeIndustrialEmploymentPrecinct_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimeIndustrialEmploymentPrecinct_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimeIndustrialEmploymentPrecinct_11.addFeatures(features_PrimeIndustrialEmploymentPrecinct_11);
var lyr_PrimeIndustrialEmploymentPrecinct_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimeIndustrialEmploymentPrecinct_11, 
                style: style_PrimeIndustrialEmploymentPrecinct_11,
                popuplayertitle: "Prime Industrial Employment Precinct",
                interactive: false,
                title: '<img src="styles/legend/PrimeIndustrialEmploymentPrecinct_11.png" /> Prime Industrial Employment Precinct'
            });
var format_NationalEmploymentCluster_12 = new ol.format.GeoJSON();
var features_NationalEmploymentCluster_12 = format_NationalEmploymentCluster_12.readFeatures(json_NationalEmploymentCluster_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalEmploymentCluster_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalEmploymentCluster_12.addFeatures(features_NationalEmploymentCluster_12);
var lyr_NationalEmploymentCluster_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalEmploymentCluster_12, 
                style: style_NationalEmploymentCluster_12,
                popuplayertitle: "National Employment Cluster",
                interactive: false,
                title: '<img src="styles/legend/NationalEmploymentCluster_12.png" /> National Employment Cluster'
            });
var format_StateSignificantIndustrialEmploymentPrecinct_13 = new ol.format.GeoJSON();
var features_StateSignificantIndustrialEmploymentPrecinct_13 = format_StateSignificantIndustrialEmploymentPrecinct_13.readFeatures(json_StateSignificantIndustrialEmploymentPrecinct_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantIndustrialEmploymentPrecinct_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantIndustrialEmploymentPrecinct_13.addFeatures(features_StateSignificantIndustrialEmploymentPrecinct_13);
var lyr_StateSignificantIndustrialEmploymentPrecinct_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantIndustrialEmploymentPrecinct_13, 
                style: style_StateSignificantIndustrialEmploymentPrecinct_13,
                popuplayertitle: "State Significant Industrial Employment Precinct",
                interactive: false,
                title: '<img src="styles/legend/StateSignificantIndustrialEmploymentPrecinct_13.png" /> State Significant Industrial Employment Precinct'
            });
var format_FutureEmployment_14 = new ol.format.GeoJSON();
var features_FutureEmployment_14 = format_FutureEmployment_14.readFeatures(json_FutureEmployment_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureEmployment_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureEmployment_14.addFeatures(features_FutureEmployment_14);
var lyr_FutureEmployment_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureEmployment_14, 
                style: style_FutureEmployment_14,
                popuplayertitle: "Future Employment",
                interactive: false,
                title: '<img src="styles/legend/FutureEmployment_14.png" /> Future Employment'
            });
var format_StateSignificantInfillAreas_15 = new ol.format.GeoJSON();
var features_StateSignificantInfillAreas_15 = format_StateSignificantInfillAreas_15.readFeatures(json_StateSignificantInfillAreas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantInfillAreas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantInfillAreas_15.addFeatures(features_StateSignificantInfillAreas_15);
var lyr_StateSignificantInfillAreas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantInfillAreas_15, 
                style: style_StateSignificantInfillAreas_15,
                popuplayertitle: "State Significant Infill Areas",
                interactive: false,
                title: '<img src="styles/legend/StateSignificantInfillAreas_15.png" /> State Significant Infill Areas'
            });
var format_LocalInfillInvestigationAreas_16 = new ol.format.GeoJSON();
var features_LocalInfillInvestigationAreas_16 = format_LocalInfillInvestigationAreas_16.readFeatures(json_LocalInfillInvestigationAreas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalInfillInvestigationAreas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalInfillInvestigationAreas_16.addFeatures(features_LocalInfillInvestigationAreas_16);
var lyr_LocalInfillInvestigationAreas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalInfillInvestigationAreas_16, 
                style: style_LocalInfillInvestigationAreas_16,
                popuplayertitle: "Local Infill Investigation Areas",
                interactive: false,
                title: '<img src="styles/legend/LocalInfillInvestigationAreas_16.png" /> Local Infill Investigation Areas'
            });
var format_Suburbs_17 = new ol.format.GeoJSON();
var features_Suburbs_17 = format_Suburbs_17.readFeatures(json_Suburbs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suburbs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suburbs_17.addFeatures(features_Suburbs_17);
var lyr_Suburbs_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suburbs_17, 
                style: style_Suburbs_17,
                popuplayertitle: "Suburbs",
                interactive: false,
                title: '<img src="styles/legend/Suburbs_17.png" /> Suburbs'
            });
var format_GARPLGA_18 = new ol.format.GeoJSON();
var features_GARPLGA_18 = format_GARPLGA_18.readFeatures(json_GARPLGA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPLGA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPLGA_18.addFeatures(features_GARPLGA_18);
var lyr_GARPLGA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPLGA_18, 
                style: style_GARPLGA_18,
                popuplayertitle: "GARP-LGA",
                interactive: false,
                title: '<img src="styles/legend/GARPLGA_18.png" /> GARP-LGA'
            });
var format_GARPParcelBoundaries_19 = new ol.format.GeoJSON();
var features_GARPParcelBoundaries_19 = format_GARPParcelBoundaries_19.readFeatures(json_GARPParcelBoundaries_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPParcelBoundaries_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPParcelBoundaries_19.addFeatures(features_GARPParcelBoundaries_19);
var lyr_GARPParcelBoundaries_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPParcelBoundaries_19, 
                style: style_GARPParcelBoundaries_19,
                popuplayertitle: "GARP Parcel Boundaries",
                interactive: false,
                title: '<img src="styles/legend/GARPParcelBoundaries_19.png" /> GARP Parcel Boundaries'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Suburbs_17,lyr_GARPLGA_18,lyr_GARPParcelBoundaries_19,],
                                fold: "open",
                                title: "Administrative"});
var group_GarpVisionMapElements = new ol.layer.Group({
                                layers: [lyr_CharacterPreservationDistrict_2,lyr_EnvironmentandFoodProductionArea_3,lyr_OpenSpaceNetworkGreenSpace_4,lyr_OpenSpaceNetworkGreenWays_5,lyr_InterUrbanBreaks_6,lyr_NorthernParkLands_7,lyr_FutureGreenfieldSupplyinEFPA_8,lyr_FutureGreenfieldSupplyoutsideEFPA_9,lyr_StateInnovationPlaces_10,lyr_PrimeIndustrialEmploymentPrecinct_11,lyr_NationalEmploymentCluster_12,lyr_StateSignificantIndustrialEmploymentPrecinct_13,lyr_FutureEmployment_14,lyr_StateSignificantInfillAreas_15,lyr_LocalInfillInvestigationAreas_16,],
                                fold: "open",
                                title: "Garp Vision Map Elements"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_CharacterPreservationDistrict_2.setVisible(true);lyr_EnvironmentandFoodProductionArea_3.setVisible(true);lyr_OpenSpaceNetworkGreenSpace_4.setVisible(true);lyr_OpenSpaceNetworkGreenWays_5.setVisible(true);lyr_InterUrbanBreaks_6.setVisible(true);lyr_NorthernParkLands_7.setVisible(true);lyr_FutureGreenfieldSupplyinEFPA_8.setVisible(true);lyr_FutureGreenfieldSupplyoutsideEFPA_9.setVisible(true);lyr_StateInnovationPlaces_10.setVisible(true);lyr_PrimeIndustrialEmploymentPrecinct_11.setVisible(true);lyr_NationalEmploymentCluster_12.setVisible(true);lyr_StateSignificantIndustrialEmploymentPrecinct_13.setVisible(true);lyr_FutureEmployment_14.setVisible(true);lyr_StateSignificantInfillAreas_15.setVisible(true);lyr_LocalInfillInvestigationAreas_16.setVisible(true);lyr_Suburbs_17.setVisible(true);lyr_GARPLGA_18.setVisible(true);lyr_GARPParcelBoundaries_19.setVisible(false);
var layersList = [group_BaseLayer,group_GarpVisionMapElements,group_Administrative];
lyr_CharacterPreservationDistrict_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_EnvironmentandFoodProductionArea_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_OpenSpaceNetworkGreenSpace_4.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_OpenSpaceNetworkGreenWays_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_InterUrbanBreaks_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NorthernParkLands_7.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureGreenfieldSupplyinEFPA_8.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Gross_HA': 'Gross_HA', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', });
lyr_FutureGreenfieldSupplyoutsideEFPA_9.set('fieldAliases', {'planparcel': 'planparcel', 'Address': 'Address', 'Gross_HA': 'Gross_HA', 'Lead Link': 'Lead Link', 'Land Owner': 'Land Owner', 'Contact no': 'Contact no', 'Email': 'Email', });
lyr_StateInnovationPlaces_10.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PrimeIndustrialEmploymentPrecinct_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NationalEmploymentCluster_12.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantIndustrialEmploymentPrecinct_13.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureEmployment_14.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantInfillAreas_15.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_LocalInfillInvestigationAreas_16.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Suburbs_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'postcode': 'postcode', 'suburb': 'suburb', 'suburb_number': 'suburb_number', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'legalstartdate': 'legalstartdate', });
lyr_GARPLGA_18.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_GARPParcelBoundaries_19.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'valnno': 'Valuation No', 'dcdb_id': 'DCDB ID', 'parcel_identifier': 'Parcel Identifier', 'plan_type': 'Plan Type', 'plan_no': 'Plan No', 'parcel_no': 'Parcel No', 'unit_no': 'Unit No', 'house_no': 'Street No', 'street_name': 'Street Name', 'street_type': 'Street Type', 'suburb': 'suburb', 'hundred': 'hundred', 'title_ref': 'Title Ref', 'parcel_id': 'Plan Parcel', 'crown_ref': 'Crown Ref', 'Gross HA': 'Gross HA', });
lyr_CharacterPreservationDistrict_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_EnvironmentandFoodProductionArea_3.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_OpenSpaceNetworkGreenSpace_4.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_OpenSpaceNetworkGreenWays_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_InterUrbanBreaks_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NorthernParkLands_7.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureGreenfieldSupplyinEFPA_8.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Gross_HA': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', });
lyr_FutureGreenfieldSupplyoutsideEFPA_9.set('fieldImages', {'planparcel': 'TextEdit', 'Address': 'TextEdit', 'Gross_HA': 'TextEdit', 'Lead Link': 'TextEdit', 'Land Owner': 'TextEdit', 'Contact no': 'TextEdit', 'Email': 'TextEdit', });
lyr_StateInnovationPlaces_10.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_PrimeIndustrialEmploymentPrecinct_11.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NationalEmploymentCluster_12.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantIndustrialEmploymentPrecinct_13.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureEmployment_14.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantInfillAreas_15.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_LocalInfillInvestigationAreas_16.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Suburbs_17.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'postcode': 'TextEdit', 'suburb': 'TextEdit', 'suburb_number': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'legalstartdate': 'DateTime', });
lyr_GARPLGA_18.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_GARPParcelBoundaries_19.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'valnno': 'TextEdit', 'dcdb_id': 'TextEdit', 'parcel_identifier': 'TextEdit', 'plan_type': 'TextEdit', 'plan_no': 'TextEdit', 'parcel_no': 'TextEdit', 'unit_no': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'suburb': 'TextEdit', 'hundred': 'TextEdit', 'title_ref': 'TextEdit', 'parcel_id': 'TextEdit', 'crown_ref': 'TextEdit', 'Gross HA': 'TextEdit', });
lyr_CharacterPreservationDistrict_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_EnvironmentandFoodProductionArea_3.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_OpenSpaceNetworkGreenSpace_4.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_OpenSpaceNetworkGreenWays_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_InterUrbanBreaks_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_NorthernParkLands_7.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_FutureGreenfieldSupplyinEFPA_8.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Gross_HA': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_FutureGreenfieldSupplyoutsideEFPA_9.set('fieldLabels', {'planparcel': 'inline label - always visible', 'Address': 'inline label - always visible', 'Gross_HA': 'inline label - always visible', 'Lead Link': 'inline label - always visible', 'Land Owner': 'inline label - always visible', 'Contact no': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_StateInnovationPlaces_10.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_PrimeIndustrialEmploymentPrecinct_11.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_NationalEmploymentCluster_12.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_StateSignificantIndustrialEmploymentPrecinct_13.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_FutureEmployment_14.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_StateSignificantInfillAreas_15.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_LocalInfillInvestigationAreas_16.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Suburbs_17.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'postcode': 'no label', 'suburb': 'no label', 'suburb_number': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'legalstartdate': 'no label', });
lyr_GARPLGA_18.set('fieldLabels', {'fid': 'inline label - always visible', 'LGA_CODE24': 'inline label - always visible', 'LGA_NAME24': 'inline label - always visible', 'STE_CODE21': 'inline label - always visible', 'STE_NAME21': 'inline label - always visible', 'AUS_CODE21': 'inline label - always visible', 'AUS_NAME21': 'inline label - always visible', 'AREASQKM': 'inline label - always visible', 'LOCI_URI21': 'inline label - always visible', });
lyr_GARPParcelBoundaries_19.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'valnno': 'no label', 'dcdb_id': 'no label', 'parcel_identifier': 'no label', 'plan_type': 'no label', 'plan_no': 'no label', 'parcel_no': 'no label', 'unit_no': 'no label', 'house_no': 'no label', 'street_name': 'no label', 'street_type': 'no label', 'suburb': 'no label', 'hundred': 'no label', 'title_ref': 'no label', 'parcel_id': 'no label', 'crown_ref': 'no label', 'Gross HA': 'no label', });
lyr_GARPParcelBoundaries_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});