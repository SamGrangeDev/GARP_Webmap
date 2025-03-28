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
var format_UrbanTransportRoutes_2 = new ol.format.GeoJSON();
var features_UrbanTransportRoutes_2 = format_UrbanTransportRoutes_2.readFeatures(json_UrbanTransportRoutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanTransportRoutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanTransportRoutes_2.addFeatures(features_UrbanTransportRoutes_2);
var lyr_UrbanTransportRoutes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanTransportRoutes_2, 
                style: style_UrbanTransportRoutes_2,
                popuplayertitle: 'Urban Transport Routes',
                interactive: false,
                title: '<img src="styles/legend/UrbanTransportRoutes_2.png" /> Urban Transport Routes'
            });
var format_FutureRoadWidening_3 = new ol.format.GeoJSON();
var features_FutureRoadWidening_3 = format_FutureRoadWidening_3.readFeatures(json_FutureRoadWidening_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureRoadWidening_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureRoadWidening_3.addFeatures(features_FutureRoadWidening_3);
var lyr_FutureRoadWidening_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureRoadWidening_3, 
                style: style_FutureRoadWidening_3,
                popuplayertitle: 'Future Road Widening',
                interactive: false,
                title: '<img src="styles/legend/FutureRoadWidening_3.png" /> Future Road Widening'
            });
var format_FutureLocalRoadWidening_4 = new ol.format.GeoJSON();
var features_FutureLocalRoadWidening_4 = format_FutureLocalRoadWidening_4.readFeatures(json_FutureLocalRoadWidening_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureLocalRoadWidening_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureLocalRoadWidening_4.addFeatures(features_FutureLocalRoadWidening_4);
var lyr_FutureLocalRoadWidening_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureLocalRoadWidening_4, 
                style: style_FutureLocalRoadWidening_4,
                popuplayertitle: 'Future Local Road Widening',
                interactive: false,
                title: '<img src="styles/legend/FutureLocalRoadWidening_4.png" /> Future Local Road Widening'
            });
var format_CharacterAreaOverlay_5 = new ol.format.GeoJSON();
var features_CharacterAreaOverlay_5 = format_CharacterAreaOverlay_5.readFeatures(json_CharacterAreaOverlay_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharacterAreaOverlay_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterAreaOverlay_5.addFeatures(features_CharacterAreaOverlay_5);
var lyr_CharacterAreaOverlay_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterAreaOverlay_5, 
                style: style_CharacterAreaOverlay_5,
                popuplayertitle: 'Character Area Overlay',
                interactive: false,
                title: '<img src="styles/legend/CharacterAreaOverlay_5.png" /> Character Area Overlay'
            });
var format_AffordableHousing_6 = new ol.format.GeoJSON();
var features_AffordableHousing_6 = format_AffordableHousing_6.readFeatures(json_AffordableHousing_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AffordableHousing_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AffordableHousing_6.addFeatures(features_AffordableHousing_6);
var lyr_AffordableHousing_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AffordableHousing_6, 
                style: style_AffordableHousing_6,
                popuplayertitle: 'Affordable Housing',
                interactive: false,
                title: '<img src="styles/legend/AffordableHousing_6.png" /> Affordable Housing'
            });
var format_MajorUrbanTransportRoutes_7 = new ol.format.GeoJSON();
var features_MajorUrbanTransportRoutes_7 = format_MajorUrbanTransportRoutes_7.readFeatures(json_MajorUrbanTransportRoutes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorUrbanTransportRoutes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorUrbanTransportRoutes_7.addFeatures(features_MajorUrbanTransportRoutes_7);
var lyr_MajorUrbanTransportRoutes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorUrbanTransportRoutes_7, 
                style: style_MajorUrbanTransportRoutes_7,
                popuplayertitle: 'Major Urban Transport Routes',
                interactive: false,
                title: '<img src="styles/legend/MajorUrbanTransportRoutes_7.png" /> Major Urban Transport Routes'
            });
var format_UrbanTreeCanopy_8 = new ol.format.GeoJSON();
var features_UrbanTreeCanopy_8 = format_UrbanTreeCanopy_8.readFeatures(json_UrbanTreeCanopy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UrbanTreeCanopy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UrbanTreeCanopy_8.addFeatures(features_UrbanTreeCanopy_8);
var lyr_UrbanTreeCanopy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UrbanTreeCanopy_8, 
                style: style_UrbanTreeCanopy_8,
                popuplayertitle: 'Urban Tree Canopy',
                interactive: false,
                title: '<img src="styles/legend/UrbanTreeCanopy_8.png" /> Urban Tree Canopy'
            });
var format_TrafficGeneratingDevelopment_9 = new ol.format.GeoJSON();
var features_TrafficGeneratingDevelopment_9 = format_TrafficGeneratingDevelopment_9.readFeatures(json_TrafficGeneratingDevelopment_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficGeneratingDevelopment_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficGeneratingDevelopment_9.addFeatures(features_TrafficGeneratingDevelopment_9);
var lyr_TrafficGeneratingDevelopment_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrafficGeneratingDevelopment_9, 
                style: style_TrafficGeneratingDevelopment_9,
                popuplayertitle: 'Traffic Generating Development',
                interactive: false,
                title: '<img src="styles/legend/TrafficGeneratingDevelopment_9.png" /> Traffic Generating Development'
            });
var format_StormwaterManagement_10 = new ol.format.GeoJSON();
var features_StormwaterManagement_10 = format_StormwaterManagement_10.readFeatures(json_StormwaterManagement_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StormwaterManagement_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StormwaterManagement_10.addFeatures(features_StormwaterManagement_10);
var lyr_StormwaterManagement_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StormwaterManagement_10, 
                style: style_StormwaterManagement_10,
                popuplayertitle: 'Stormwater Management',
                interactive: false,
                title: '<img src="styles/legend/StormwaterManagement_10.png" /> Stormwater Management'
            });
var format_StateSignificantNativeVegetation_11 = new ol.format.GeoJSON();
var features_StateSignificantNativeVegetation_11 = format_StateSignificantNativeVegetation_11.readFeatures(json_StateSignificantNativeVegetation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantNativeVegetation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantNativeVegetation_11.addFeatures(features_StateSignificantNativeVegetation_11);
var lyr_StateSignificantNativeVegetation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantNativeVegetation_11, 
                style: style_StateSignificantNativeVegetation_11,
                popuplayertitle: 'State Significant Native Vegetation',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantNativeVegetation_11.png" /> State Significant Native Vegetation'
            });
var format_SignificantLandscapeProtection_12 = new ol.format.GeoJSON();
var features_SignificantLandscapeProtection_12 = format_SignificantLandscapeProtection_12.readFeatures(json_SignificantLandscapeProtection_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignificantLandscapeProtection_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignificantLandscapeProtection_12.addFeatures(features_SignificantLandscapeProtection_12);
var lyr_SignificantLandscapeProtection_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignificantLandscapeProtection_12, 
                style: style_SignificantLandscapeProtection_12,
                popuplayertitle: 'Significant Landscape Protection',
                interactive: false,
                title: '<img src="styles/legend/SignificantLandscapeProtection_12.png" /> Significant Landscape Protection'
            });
var format_ScenicQuality_13 = new ol.format.GeoJSON();
var features_ScenicQuality_13 = format_ScenicQuality_13.readFeatures(json_ScenicQuality_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ScenicQuality_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ScenicQuality_13.addFeatures(features_ScenicQuality_13);
var lyr_ScenicQuality_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ScenicQuality_13, 
                style: style_ScenicQuality_13,
                popuplayertitle: 'Scenic Quality',
                interactive: false,
                title: '<img src="styles/legend/ScenicQuality_13.png" /> Scenic Quality'
            });
var format_RiverMurrayTributariesProtectionArea_14 = new ol.format.GeoJSON();
var features_RiverMurrayTributariesProtectionArea_14 = format_RiverMurrayTributariesProtectionArea_14.readFeatures(json_RiverMurrayTributariesProtectionArea_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverMurrayTributariesProtectionArea_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverMurrayTributariesProtectionArea_14.addFeatures(features_RiverMurrayTributariesProtectionArea_14);
var lyr_RiverMurrayTributariesProtectionArea_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverMurrayTributariesProtectionArea_14, 
                style: style_RiverMurrayTributariesProtectionArea_14,
                popuplayertitle: 'River Murray Tributaries Protection Area',
                interactive: false,
                title: '<img src="styles/legend/RiverMurrayTributariesProtectionArea_14.png" /> River Murray Tributaries Protection Area'
            });
var format_RiverMurrayFloodplainProtection_15 = new ol.format.GeoJSON();
var features_RiverMurrayFloodplainProtection_15 = format_RiverMurrayFloodplainProtection_15.readFeatures(json_RiverMurrayFloodplainProtection_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiverMurrayFloodplainProtection_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiverMurrayFloodplainProtection_15.addFeatures(features_RiverMurrayFloodplainProtection_15);
var lyr_RiverMurrayFloodplainProtection_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiverMurrayFloodplainProtection_15, 
                style: style_RiverMurrayFloodplainProtection_15,
                popuplayertitle: 'River Murray Floodplain Protection',
                interactive: false,
                title: '<img src="styles/legend/RiverMurrayFloodplainProtection_15.png" /> River Murray Floodplain Protection'
            });
var format_RegulatedandSignificantTree_16 = new ol.format.GeoJSON();
var features_RegulatedandSignificantTree_16 = format_RegulatedandSignificantTree_16.readFeatures(json_RegulatedandSignificantTree_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegulatedandSignificantTree_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegulatedandSignificantTree_16.addFeatures(features_RegulatedandSignificantTree_16);
var lyr_RegulatedandSignificantTree_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegulatedandSignificantTree_16, 
                style: style_RegulatedandSignificantTree_16,
                popuplayertitle: 'Regulated and Significant Tree',
                interactive: false,
                title: '<img src="styles/legend/RegulatedandSignificantTree_16.png" /> Regulated and Significant Tree'
            });
var format_RamsarWetlands_17 = new ol.format.GeoJSON();
var features_RamsarWetlands_17 = format_RamsarWetlands_17.readFeatures(json_RamsarWetlands_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RamsarWetlands_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RamsarWetlands_17.addFeatures(features_RamsarWetlands_17);
var lyr_RamsarWetlands_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RamsarWetlands_17, 
                style: style_RamsarWetlands_17,
                popuplayertitle: 'Ramsar Wetlands',
                interactive: false,
                title: '<img src="styles/legend/RamsarWetlands_17.png" /> Ramsar Wetlands'
            });
var format_PrescribedWellsArea_18 = new ol.format.GeoJSON();
var features_PrescribedWellsArea_18 = format_PrescribedWellsArea_18.readFeatures(json_PrescribedWellsArea_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedWellsArea_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedWellsArea_18.addFeatures(features_PrescribedWellsArea_18);
var lyr_PrescribedWellsArea_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedWellsArea_18, 
                style: style_PrescribedWellsArea_18,
                popuplayertitle: 'Prescribed Wells Area',
                interactive: false,
                title: '<img src="styles/legend/PrescribedWellsArea_18.png" /> Prescribed Wells Area'
            });
var format_PrescribedWatercourses_19 = new ol.format.GeoJSON();
var features_PrescribedWatercourses_19 = format_PrescribedWatercourses_19.readFeatures(json_PrescribedWatercourses_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedWatercourses_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedWatercourses_19.addFeatures(features_PrescribedWatercourses_19);
var lyr_PrescribedWatercourses_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedWatercourses_19, 
                style: style_PrescribedWatercourses_19,
                popuplayertitle: 'Prescribed Watercourses',
                interactive: false,
                title: '<img src="styles/legend/PrescribedWatercourses_19.png" /> Prescribed Watercourses'
            });
var format_PrescribedWaterResourcesArea_20 = new ol.format.GeoJSON();
var features_PrescribedWaterResourcesArea_20 = format_PrescribedWaterResourcesArea_20.readFeatures(json_PrescribedWaterResourcesArea_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedWaterResourcesArea_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedWaterResourcesArea_20.addFeatures(features_PrescribedWaterResourcesArea_20);
var lyr_PrescribedWaterResourcesArea_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedWaterResourcesArea_20, 
                style: style_PrescribedWaterResourcesArea_20,
                popuplayertitle: 'Prescribed Water Resources Area',
                interactive: false,
                title: '<img src="styles/legend/PrescribedWaterResourcesArea_20.png" /> Prescribed Water Resources Area'
            });
var format_PrescribedSurfaceWaterAreas_21 = new ol.format.GeoJSON();
var features_PrescribedSurfaceWaterAreas_21 = format_PrescribedSurfaceWaterAreas_21.readFeatures(json_PrescribedSurfaceWaterAreas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedSurfaceWaterAreas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedSurfaceWaterAreas_21.addFeatures(features_PrescribedSurfaceWaterAreas_21);
var lyr_PrescribedSurfaceWaterAreas_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedSurfaceWaterAreas_21, 
                style: style_PrescribedSurfaceWaterAreas_21,
                popuplayertitle: 'Prescribed Surface Water Areas',
                interactive: false,
                title: '<img src="styles/legend/PrescribedSurfaceWaterAreas_21.png" /> Prescribed Surface Water Areas'
            });
var format_NoiseandAirEmissions_22 = new ol.format.GeoJSON();
var features_NoiseandAirEmissions_22 = format_NoiseandAirEmissions_22.readFeatures(json_NoiseandAirEmissions_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoiseandAirEmissions_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoiseandAirEmissions_22.addFeatures(features_NoiseandAirEmissions_22);
var lyr_NoiseandAirEmissions_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoiseandAirEmissions_22, 
                style: style_NoiseandAirEmissions_22,
                popuplayertitle: 'Noise and Air Emissions',
                interactive: false,
                title: '<img src="styles/legend/NoiseandAirEmissions_22.png" /> Noise and Air Emissions'
            });
var format_NativeVegetation_23 = new ol.format.GeoJSON();
var features_NativeVegetation_23 = format_NativeVegetation_23.readFeatures(json_NativeVegetation_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeVegetation_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeVegetation_23.addFeatures(features_NativeVegetation_23);
var lyr_NativeVegetation_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NativeVegetation_23, 
                style: style_NativeVegetation_23,
                popuplayertitle: 'Native Vegetation',
                interactive: false,
                title: '<img src="styles/legend/NativeVegetation_23.png" /> Native Vegetation'
            });
var format_MurrayDarlingBasin_24 = new ol.format.GeoJSON();
var features_MurrayDarlingBasin_24 = format_MurrayDarlingBasin_24.readFeatures(json_MurrayDarlingBasin_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayDarlingBasin_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayDarlingBasin_24.addFeatures(features_MurrayDarlingBasin_24);
var lyr_MurrayDarlingBasin_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayDarlingBasin_24, 
                style: style_MurrayDarlingBasin_24,
                popuplayertitle: 'Murray Darling Basin',
                interactive: false,
                title: '<img src="styles/legend/MurrayDarlingBasin_24.png" /> Murray Darling Basin'
            });
var format_MountLoftyRangesCatchmentArea2_25 = new ol.format.GeoJSON();
var features_MountLoftyRangesCatchmentArea2_25 = format_MountLoftyRangesCatchmentArea2_25.readFeatures(json_MountLoftyRangesCatchmentArea2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountLoftyRangesCatchmentArea2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountLoftyRangesCatchmentArea2_25.addFeatures(features_MountLoftyRangesCatchmentArea2_25);
var lyr_MountLoftyRangesCatchmentArea2_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountLoftyRangesCatchmentArea2_25, 
                style: style_MountLoftyRangesCatchmentArea2_25,
                popuplayertitle: 'Mount Lofty Ranges Catchment (Area 2)',
                interactive: false,
                title: '<img src="styles/legend/MountLoftyRangesCatchmentArea2_25.png" /> Mount Lofty Ranges Catchment (Area 2)'
            });
var format_MountLoftyRangesCatchmentArea1_26 = new ol.format.GeoJSON();
var features_MountLoftyRangesCatchmentArea1_26 = format_MountLoftyRangesCatchmentArea1_26.readFeatures(json_MountLoftyRangesCatchmentArea1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountLoftyRangesCatchmentArea1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountLoftyRangesCatchmentArea1_26.addFeatures(features_MountLoftyRangesCatchmentArea1_26);
var lyr_MountLoftyRangesCatchmentArea1_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountLoftyRangesCatchmentArea1_26, 
                style: style_MountLoftyRangesCatchmentArea1_26,
                popuplayertitle: 'Mount Lofty Ranges Catchment (Area 1)',
                interactive: false,
                title: '<img src="styles/legend/MountLoftyRangesCatchmentArea1_26.png" /> Mount Lofty Ranges Catchment (Area 1)'
            });
var format_MarineParksRestrictedUse_27 = new ol.format.GeoJSON();
var features_MarineParksRestrictedUse_27 = format_MarineParksRestrictedUse_27.readFeatures(json_MarineParksRestrictedUse_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarineParksRestrictedUse_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineParksRestrictedUse_27.addFeatures(features_MarineParksRestrictedUse_27);
var lyr_MarineParksRestrictedUse_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineParksRestrictedUse_27, 
                style: style_MarineParksRestrictedUse_27,
                popuplayertitle: 'Marine Parks (Restricted Use)',
                interactive: false,
                title: '<img src="styles/legend/MarineParksRestrictedUse_27.png" /> Marine Parks (Restricted Use)'
            });
var format_MarineParksManagedUse_28 = new ol.format.GeoJSON();
var features_MarineParksManagedUse_28 = format_MarineParksManagedUse_28.readFeatures(json_MarineParksManagedUse_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarineParksManagedUse_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MarineParksManagedUse_28.addFeatures(features_MarineParksManagedUse_28);
var lyr_MarineParksManagedUse_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MarineParksManagedUse_28, 
                style: style_MarineParksManagedUse_28,
                popuplayertitle: 'Marine Parks (Managed Use)',
                interactive: false,
                title: '<img src="styles/legend/MarineParksManagedUse_28.png" /> Marine Parks (Managed Use)'
            });
var format_LocalHeritagePlace_29 = new ol.format.GeoJSON();
var features_LocalHeritagePlace_29 = format_LocalHeritagePlace_29.readFeatures(json_LocalHeritagePlace_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalHeritagePlace_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalHeritagePlace_29.addFeatures(features_LocalHeritagePlace_29);
var lyr_LocalHeritagePlace_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalHeritagePlace_29, 
                style: style_LocalHeritagePlace_29,
                popuplayertitle: 'Local Heritage Place',
                interactive: false,
                title: '<img src="styles/legend/LocalHeritagePlace_29.png" /> Local Heritage Place'
            });
var format_LimitedDwelling_30 = new ol.format.GeoJSON();
var features_LimitedDwelling_30 = format_LimitedDwelling_30.readFeatures(json_LimitedDwelling_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedDwelling_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedDwelling_30.addFeatures(features_LimitedDwelling_30);
var lyr_LimitedDwelling_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedDwelling_30, 
                style: style_LimitedDwelling_30,
                popuplayertitle: 'Limited Dwelling',
                interactive: false,
                title: '<img src="styles/legend/LimitedDwelling_30.png" /> Limited Dwelling'
            });
var format_KeyOutbackandRuralRoutes_31 = new ol.format.GeoJSON();
var features_KeyOutbackandRuralRoutes_31 = format_KeyOutbackandRuralRoutes_31.readFeatures(json_KeyOutbackandRuralRoutes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeyOutbackandRuralRoutes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyOutbackandRuralRoutes_31.addFeatures(features_KeyOutbackandRuralRoutes_31);
var lyr_KeyOutbackandRuralRoutes_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyOutbackandRuralRoutes_31, 
                style: style_KeyOutbackandRuralRoutes_31,
                popuplayertitle: 'Key Outback and Rural Routes',
                interactive: false,
                title: '<img src="styles/legend/KeyOutbackandRuralRoutes_31.png" /> Key Outback and Rural Routes'
            });
var format_InterfaceManagement_32 = new ol.format.GeoJSON();
var features_InterfaceManagement_32 = format_InterfaceManagement_32.readFeatures(json_InterfaceManagement_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterfaceManagement_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterfaceManagement_32.addFeatures(features_InterfaceManagement_32);
var lyr_InterfaceManagement_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterfaceManagement_32, 
                style: style_InterfaceManagement_32,
                popuplayertitle: 'Interface Management',
                interactive: false,
                title: '<img src="styles/legend/InterfaceManagement_32.png" /> Interface Management'
            });
var format_HeritageAdjacency_33 = new ol.format.GeoJSON();
var features_HeritageAdjacency_33 = format_HeritageAdjacency_33.readFeatures(json_HeritageAdjacency_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeritageAdjacency_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeritageAdjacency_33.addFeatures(features_HeritageAdjacency_33);
var lyr_HeritageAdjacency_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeritageAdjacency_33, 
                style: style_HeritageAdjacency_33,
                popuplayertitle: 'Heritage Adjacency',
                interactive: false,
                title: '<img src="styles/legend/HeritageAdjacency_33.png" /> Heritage Adjacency'
            });
var format_HazardsBushfireMediumRisk_34 = new ol.format.GeoJSON();
var features_HazardsBushfireMediumRisk_34 = format_HazardsBushfireMediumRisk_34.readFeatures(json_HazardsBushfireMediumRisk_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireMediumRisk_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireMediumRisk_34.addFeatures(features_HazardsBushfireMediumRisk_34);
var lyr_HazardsBushfireMediumRisk_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireMediumRisk_34, 
                style: style_HazardsBushfireMediumRisk_34,
                popuplayertitle: 'Hazards (Bushfire - Medium Risk)',
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireMediumRisk_34.png" /> Hazards (Bushfire - Medium Risk)'
            });
var format_HazardsBushfireHighRisk_35 = new ol.format.GeoJSON();
var features_HazardsBushfireHighRisk_35 = format_HazardsBushfireHighRisk_35.readFeatures(json_HazardsBushfireHighRisk_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireHighRisk_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireHighRisk_35.addFeatures(features_HazardsBushfireHighRisk_35);
var lyr_HazardsBushfireHighRisk_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireHighRisk_35, 
                style: style_HazardsBushfireHighRisk_35,
                popuplayertitle: 'Hazards (Bushfire - High Risk)',
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireHighRisk_35.png" /> Hazards (Bushfire - High Risk)'
            });
var format_HazardsBushfireGeneralRisk_36 = new ol.format.GeoJSON();
var features_HazardsBushfireGeneralRisk_36 = format_HazardsBushfireGeneralRisk_36.readFeatures(json_HazardsBushfireGeneralRisk_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireGeneralRisk_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireGeneralRisk_36.addFeatures(features_HazardsBushfireGeneralRisk_36);
var lyr_HazardsBushfireGeneralRisk_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireGeneralRisk_36, 
                style: style_HazardsBushfireGeneralRisk_36,
                popuplayertitle: 'Hazards (Bushfire - General Risk)',
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireGeneralRisk_36.png" /> Hazards (Bushfire - General Risk)'
            });
var format_Gateway_37 = new ol.format.GeoJSON();
var features_Gateway_37 = format_Gateway_37.readFeatures(json_Gateway_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gateway_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gateway_37.addFeatures(features_Gateway_37);
var lyr_Gateway_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gateway_37, 
                style: style_Gateway_37,
                popuplayertitle: 'Gateway',
                interactive: false,
                title: '<img src="styles/legend/Gateway_37.png" /> Gateway'
            });
var format_EnvironmentandFoodProductionArea_38 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_38 = format_EnvironmentandFoodProductionArea_38.readFeatures(json_EnvironmentandFoodProductionArea_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_38.addFeatures(features_EnvironmentandFoodProductionArea_38);
var lyr_EnvironmentandFoodProductionArea_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_38, 
                style: style_EnvironmentandFoodProductionArea_38,
                popuplayertitle: 'Environment and Food Production Area',
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_38.png" /> Environment and Food Production Area'
            });
var format_DwellingExcision_39 = new ol.format.GeoJSON();
var features_DwellingExcision_39 = format_DwellingExcision_39.readFeatures(json_DwellingExcision_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DwellingExcision_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DwellingExcision_39.addFeatures(features_DwellingExcision_39);
var lyr_DwellingExcision_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DwellingExcision_39, 
                style: style_DwellingExcision_39,
                popuplayertitle: 'Dwelling Excision',
                interactive: false,
                title: '<img src="styles/legend/DwellingExcision_39.png" /> Dwelling Excision'
            });
var format_Design_40 = new ol.format.GeoJSON();
var features_Design_40 = format_Design_40.readFeatures(json_Design_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Design_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Design_40.addFeatures(features_Design_40);
var lyr_Design_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Design_40, 
                style: style_Design_40,
                popuplayertitle: 'Design',
                interactive: false,
                title: '<img src="styles/legend/Design_40.png" /> Design'
            });
var format_CharacterPreservationDistrict_41 = new ol.format.GeoJSON();
var features_CharacterPreservationDistrict_41 = format_CharacterPreservationDistrict_41.readFeatures(json_CharacterPreservationDistrict_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharacterPreservationDistrict_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterPreservationDistrict_41.addFeatures(features_CharacterPreservationDistrict_41);
var lyr_CharacterPreservationDistrict_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterPreservationDistrict_41, 
                style: style_CharacterPreservationDistrict_41,
                popuplayertitle: 'Character Preservation District',
                interactive: false,
    title: 'Character Preservation District<br />\
    <img src="styles/legend/CharacterPreservationDistrict_41_0.png" /> Township<br />\
    <img src="styles/legend/CharacterPreservationDistrict_41_1.png" /> Not In Township<br />' });
var format_BuildingNearAirfields_42 = new ol.format.GeoJSON();
var features_BuildingNearAirfields_42 = format_BuildingNearAirfields_42.readFeatures(json_BuildingNearAirfields_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuildingNearAirfields_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuildingNearAirfields_42.addFeatures(features_BuildingNearAirfields_42);
var lyr_BuildingNearAirfields_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuildingNearAirfields_42, 
                style: style_BuildingNearAirfields_42,
                popuplayertitle: 'Building Near Airfields',
                interactive: false,
                title: '<img src="styles/legend/BuildingNearAirfields_42.png" /> Building Near Airfields'
            });
var format_AirportBuildingHeightsRegulated_43 = new ol.format.GeoJSON();
var features_AirportBuildingHeightsRegulated_43 = format_AirportBuildingHeightsRegulated_43.readFeatures(json_AirportBuildingHeightsRegulated_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportBuildingHeightsRegulated_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportBuildingHeightsRegulated_43.addFeatures(features_AirportBuildingHeightsRegulated_43);
var lyr_AirportBuildingHeightsRegulated_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportBuildingHeightsRegulated_43, 
                style: style_AirportBuildingHeightsRegulated_43,
                popuplayertitle: 'Airport Building Heights (Regulated)',
                interactive: false,
    title: 'Airport Building Heights (Regulated)<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_0.png" /> All structures<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_1.png" /> All structures over 4 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_2.png" /> All structures over 6 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_3.png" /> All structures over 8 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_4.png" /> All structures over 10 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_5.png" /> All structures over 12 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_6.png" /> All structures over 14 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_7.png" /> All structures over 15 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_8.png" /> All structures over 20 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_9.png" /> All structures over 22 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_10.png" /> All structures over 25 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_11.png" /> All structures over 26 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_12.png" /> All structures over 30 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_13.png" /> All structures over 40 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_14.png" /> All structures over 44 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_15.png" /> All structures over 45 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_16.png" /> All structures over 48.5 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_17.png" /> All structures over 50 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_18.png" /> All structures over 60 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_19.png" /> All structures over 70 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_20.png" /> All structures over 75 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_21.png" /> All structures over 80 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_22.png" /> All structures over 90 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_23.png" /> All structures over 100 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_24.png" /> All structures over 100 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_25.png" /> All structures over 110 metres<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_26.png" /> All structures over 110 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_27.png" /> All structures over 120 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_28.png" /> All structures over 130 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_29.png" /> All structures over 140 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_30.png" /> All structures over 150 metres AHD<br />\
    <img src="styles/legend/AirportBuildingHeightsRegulated_43_31.png" /> All structures over 153.5 metres AHD<br />' });
var format_AirportBuildingHeightsAircraftLandingArea_44 = new ol.format.GeoJSON();
var features_AirportBuildingHeightsAircraftLandingArea_44 = format_AirportBuildingHeightsAircraftLandingArea_44.readFeatures(json_AirportBuildingHeightsAircraftLandingArea_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportBuildingHeightsAircraftLandingArea_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportBuildingHeightsAircraftLandingArea_44.addFeatures(features_AirportBuildingHeightsAircraftLandingArea_44);
var lyr_AirportBuildingHeightsAircraftLandingArea_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportBuildingHeightsAircraftLandingArea_44, 
                style: style_AirportBuildingHeightsAircraftLandingArea_44,
                popuplayertitle: 'Airport Building Heights (Aircraft Landing Area)',
                interactive: false,
                title: '<img src="styles/legend/AirportBuildingHeightsAircraftLandingArea_44.png" /> Airport Building Heights (Aircraft Landing Area)'
            });
var format_AircraftNoiseExposure_45 = new ol.format.GeoJSON();
var features_AircraftNoiseExposure_45 = format_AircraftNoiseExposure_45.readFeatures(json_AircraftNoiseExposure_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AircraftNoiseExposure_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AircraftNoiseExposure_45.addFeatures(features_AircraftNoiseExposure_45);
var lyr_AircraftNoiseExposure_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AircraftNoiseExposure_45, 
                style: style_AircraftNoiseExposure_45,
                popuplayertitle: 'Aircraft Noise Exposure',
                interactive: false,
    title: 'Aircraft Noise Exposure<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_0.png" /> ANEF 20<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_1.png" /> ANEF 25<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_2.png" /> ANEF 30<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_3.png" /> ANEF 35<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_4.png" /> ANEF 40<br />\
    <img src="styles/legend/AircraftNoiseExposure_45_5.png" /> Area is subject to aircraft noise<br />' });
var format_AdvertisingNearSignalisedIntersections_46 = new ol.format.GeoJSON();
var features_AdvertisingNearSignalisedIntersections_46 = format_AdvertisingNearSignalisedIntersections_46.readFeatures(json_AdvertisingNearSignalisedIntersections_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdvertisingNearSignalisedIntersections_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdvertisingNearSignalisedIntersections_46.addFeatures(features_AdvertisingNearSignalisedIntersections_46);
var lyr_AdvertisingNearSignalisedIntersections_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdvertisingNearSignalisedIntersections_46, 
                style: style_AdvertisingNearSignalisedIntersections_46,
                popuplayertitle: 'Advertising Near Signalised Intersections',
                interactive: false,
                title: '<img src="styles/legend/AdvertisingNearSignalisedIntersections_46.png" /> Advertising Near Signalised Intersections'
            });
var format_SignificantInterfaceManagement_47 = new ol.format.GeoJSON();
var features_SignificantInterfaceManagement_47 = format_SignificantInterfaceManagement_47.readFeatures(json_SignificantInterfaceManagement_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignificantInterfaceManagement_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignificantInterfaceManagement_47.addFeatures(features_SignificantInterfaceManagement_47);
var lyr_SignificantInterfaceManagement_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignificantInterfaceManagement_47, 
                style: style_SignificantInterfaceManagement_47,
                popuplayertitle: 'Significant Interface Management',
                interactive: false,
                title: '<img src="styles/legend/SignificantInterfaceManagement_47.png" /> Significant Interface Management'
            });
var format_ResourceExtractionProtectionArea_48 = new ol.format.GeoJSON();
var features_ResourceExtractionProtectionArea_48 = format_ResourceExtractionProtectionArea_48.readFeatures(json_ResourceExtractionProtectionArea_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResourceExtractionProtectionArea_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResourceExtractionProtectionArea_48.addFeatures(features_ResourceExtractionProtectionArea_48);
var lyr_ResourceExtractionProtectionArea_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResourceExtractionProtectionArea_48, 
                style: style_ResourceExtractionProtectionArea_48,
                popuplayertitle: 'Resource Extraction Protection Area',
                interactive: false,
                title: '<img src="styles/legend/ResourceExtractionProtectionArea_48.png" /> Resource Extraction Protection Area'
            });
var format_LimitedLandDivision_49 = new ol.format.GeoJSON();
var features_LimitedLandDivision_49 = format_LimitedLandDivision_49.readFeatures(json_LimitedLandDivision_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedLandDivision_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedLandDivision_49.addFeatures(features_LimitedLandDivision_49);
var lyr_LimitedLandDivision_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedLandDivision_49, 
                style: style_LimitedLandDivision_49,
                popuplayertitle: 'Limited Land Division',
                interactive: false,
                title: '<img src="styles/legend/LimitedLandDivision_49.png" /> Limited Land Division'
            });
var format_CoastalFlooding_50 = new ol.format.GeoJSON();
var features_CoastalFlooding_50 = format_CoastalFlooding_50.readFeatures(json_CoastalFlooding_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalFlooding_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalFlooding_50.addFeatures(features_CoastalFlooding_50);
var lyr_CoastalFlooding_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalFlooding_50, 
                style: style_CoastalFlooding_50,
                popuplayertitle: 'Coastal Flooding',
                interactive: false,
                title: '<img src="styles/legend/CoastalFlooding_50.png" /> Coastal Flooding'
            });
var format_CoastalAreas_51 = new ol.format.GeoJSON();
var features_CoastalAreas_51 = format_CoastalAreas_51.readFeatures(json_CoastalAreas_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoastalAreas_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoastalAreas_51.addFeatures(features_CoastalAreas_51);
var lyr_CoastalAreas_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CoastalAreas_51, 
                style: style_CoastalAreas_51,
                popuplayertitle: 'Coastal Areas',
                interactive: false,
                title: '<img src="styles/legend/CoastalAreas_51.png" /> Coastal Areas'
            });
var format_AdelaideDolphinSanctuary_52 = new ol.format.GeoJSON();
var features_AdelaideDolphinSanctuary_52 = format_AdelaideDolphinSanctuary_52.readFeatures(json_AdelaideDolphinSanctuary_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaideDolphinSanctuary_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaideDolphinSanctuary_52.addFeatures(features_AdelaideDolphinSanctuary_52);
var lyr_AdelaideDolphinSanctuary_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaideDolphinSanctuary_52, 
                style: style_AdelaideDolphinSanctuary_52,
                popuplayertitle: 'Adelaide Dolphin Sanctuary',
                interactive: false,
                title: '<img src="styles/legend/AdelaideDolphinSanctuary_52.png" /> Adelaide Dolphin Sanctuary'
            });
var format_TunnelProtection_53 = new ol.format.GeoJSON();
var features_TunnelProtection_53 = format_TunnelProtection_53.readFeatures(json_TunnelProtection_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TunnelProtection_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TunnelProtection_53.addFeatures(features_TunnelProtection_53);
var lyr_TunnelProtection_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TunnelProtection_53, 
                style: style_TunnelProtection_53,
                popuplayertitle: 'Tunnel Protection',
                interactive: false,
                title: '<img src="styles/legend/TunnelProtection_53.png" /> Tunnel Protection'
            });
var format_NonstopCorridor_54 = new ol.format.GeoJSON();
var features_NonstopCorridor_54 = format_NonstopCorridor_54.readFeatures(json_NonstopCorridor_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonstopCorridor_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonstopCorridor_54.addFeatures(features_NonstopCorridor_54);
var lyr_NonstopCorridor_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonstopCorridor_54, 
                style: style_NonstopCorridor_54,
                popuplayertitle: 'Non-stop Corridor',
                interactive: false,
                title: '<img src="styles/legend/NonstopCorridor_54.png" /> Non-stop Corridor'
            });
var format_KeyRailwayCrossings_55 = new ol.format.GeoJSON();
var features_KeyRailwayCrossings_55 = format_KeyRailwayCrossings_55.readFeatures(json_KeyRailwayCrossings_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeyRailwayCrossings_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeyRailwayCrossings_55.addFeatures(features_KeyRailwayCrossings_55);
var lyr_KeyRailwayCrossings_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeyRailwayCrossings_55, 
                style: style_KeyRailwayCrossings_55,
                popuplayertitle: 'Key Railway Crossings',
                interactive: false,
                title: '<img src="styles/legend/KeyRailwayCrossings_55.png" /> Key Railway Crossings'
            });
var format_GasandLiquidPetroleumPipelines_56 = new ol.format.GeoJSON();
var features_GasandLiquidPetroleumPipelines_56 = format_GasandLiquidPetroleumPipelines_56.readFeatures(json_GasandLiquidPetroleumPipelines_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasandLiquidPetroleumPipelines_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasandLiquidPetroleumPipelines_56.addFeatures(features_GasandLiquidPetroleumPipelines_56);
var lyr_GasandLiquidPetroleumPipelines_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasandLiquidPetroleumPipelines_56, 
                style: style_GasandLiquidPetroleumPipelines_56,
                popuplayertitle: 'Gas and Liquid Petroleum Pipelines',
                interactive: false,
                title: '<img src="styles/legend/GasandLiquidPetroleumPipelines_56.png" /> Gas and Liquid Petroleum Pipelines'
            });
var format_GasandLiquidPetroleumPipelinesFacilities_57 = new ol.format.GeoJSON();
var features_GasandLiquidPetroleumPipelinesFacilities_57 = format_GasandLiquidPetroleumPipelinesFacilities_57.readFeatures(json_GasandLiquidPetroleumPipelinesFacilities_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasandLiquidPetroleumPipelinesFacilities_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasandLiquidPetroleumPipelinesFacilities_57.addFeatures(features_GasandLiquidPetroleumPipelinesFacilities_57);
var lyr_GasandLiquidPetroleumPipelinesFacilities_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasandLiquidPetroleumPipelinesFacilities_57, 
                style: style_GasandLiquidPetroleumPipelinesFacilities_57,
                popuplayertitle: 'Gas and Liquid Petroleum Pipelines (Facilities)',
                interactive: false,
                title: '<img src="styles/legend/GasandLiquidPetroleumPipelinesFacilities_57.png" /> Gas and Liquid Petroleum Pipelines (Facilities)'
            });
var format_DefenceAviationArea_58 = new ol.format.GeoJSON();
var features_DefenceAviationArea_58 = format_DefenceAviationArea_58.readFeatures(json_DefenceAviationArea_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DefenceAviationArea_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DefenceAviationArea_58.addFeatures(features_DefenceAviationArea_58);
var lyr_DefenceAviationArea_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DefenceAviationArea_58, 
                style: style_DefenceAviationArea_58,
                popuplayertitle: 'Defence Aviation Area',
                interactive: false,
    title: 'Defence Aviation Area<br />\
    <img src="styles/legend/DefenceAviationArea_58_0.png" /> All structures<br />\
    <img src="styles/legend/DefenceAviationArea_58_1.png" /> All structures over 7.5 metres<br />\
    <img src="styles/legend/DefenceAviationArea_58_2.png" /> All structures over 15 metres<br />\
    <img src="styles/legend/DefenceAviationArea_58_3.png" /> All structures over 45 metres<br />\
    <img src="styles/legend/DefenceAviationArea_58_4.png" /> All structures over 90 metres<br />' });
var format_StateHeritageArea_59 = new ol.format.GeoJSON();
var features_StateHeritageArea_59 = format_StateHeritageArea_59.readFeatures(json_StateHeritageArea_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateHeritageArea_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateHeritageArea_59.addFeatures(features_StateHeritageArea_59);
var lyr_StateHeritageArea_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateHeritageArea_59, 
                style: style_StateHeritageArea_59,
                popuplayertitle: 'State Heritage Area',
                interactive: false,
                title: '<img src="styles/legend/StateHeritageArea_59.png" /> State Heritage Area'
            });
var format_StateHeritagePlace_60 = new ol.format.GeoJSON();
var features_StateHeritagePlace_60 = format_StateHeritagePlace_60.readFeatures(json_StateHeritagePlace_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateHeritagePlace_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateHeritagePlace_60.addFeatures(features_StateHeritagePlace_60);
var lyr_StateHeritagePlace_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateHeritagePlace_60, 
                style: style_StateHeritagePlace_60,
                popuplayertitle: 'State Heritage Place',
                interactive: false,
                title: '<img src="styles/legend/StateHeritagePlace_60.png" /> State Heritage Place'
            });
var format_HistoricAreaOverlay_61 = new ol.format.GeoJSON();
var features_HistoricAreaOverlay_61 = format_HistoricAreaOverlay_61.readFeatures(json_HistoricAreaOverlay_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricAreaOverlay_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricAreaOverlay_61.addFeatures(features_HistoricAreaOverlay_61);
var lyr_HistoricAreaOverlay_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoricAreaOverlay_61, 
                style: style_HistoricAreaOverlay_61,
                popuplayertitle: 'Historic Area Overlay',
                interactive: false,
                title: '<img src="styles/legend/HistoricAreaOverlay_61.png" /> Historic Area Overlay'
            });
var format_HazardsFloodingHigh_62 = new ol.format.GeoJSON();
var features_HazardsFloodingHigh_62 = format_HazardsFloodingHigh_62.readFeatures(json_HazardsFloodingHigh_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsFloodingHigh_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsFloodingHigh_62.addFeatures(features_HazardsFloodingHigh_62);
var lyr_HazardsFloodingHigh_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsFloodingHigh_62, 
                style: style_HazardsFloodingHigh_62,
                popuplayertitle: 'Hazards (Flooding High)',
                interactive: false,
                title: '<img src="styles/legend/HazardsFloodingHigh_62.png" /> Hazards (Flooding High)'
            });
var format_WaterProtectionArea_63 = new ol.format.GeoJSON();
var features_WaterProtectionArea_63 = format_WaterProtectionArea_63.readFeatures(json_WaterProtectionArea_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterProtectionArea_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterProtectionArea_63.addFeatures(features_WaterProtectionArea_63);
var lyr_WaterProtectionArea_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterProtectionArea_63, 
                style: style_WaterProtectionArea_63,
                popuplayertitle: 'Water Protection Area',
                interactive: false,
                title: '<img src="styles/legend/WaterProtectionArea_63.png" /> Water Protection Area'
            });
var format_HazardsAcidSulfateSoils_64 = new ol.format.GeoJSON();
var features_HazardsAcidSulfateSoils_64 = format_HazardsAcidSulfateSoils_64.readFeatures(json_HazardsAcidSulfateSoils_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsAcidSulfateSoils_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsAcidSulfateSoils_64.addFeatures(features_HazardsAcidSulfateSoils_64);
var lyr_HazardsAcidSulfateSoils_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsAcidSulfateSoils_64, 
                style: style_HazardsAcidSulfateSoils_64,
                popuplayertitle: 'Hazards (Acid Sulfate Soils)',
                interactive: false,
                title: '<img src="styles/legend/HazardsAcidSulfateSoils_64.png" /> Hazards (Acid Sulfate Soils)'
            });
var format_ActivityZones_65 = new ol.format.GeoJSON();
var features_ActivityZones_65 = format_ActivityZones_65.readFeatures(json_ActivityZones_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActivityZones_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActivityZones_65.addFeatures(features_ActivityZones_65);
var lyr_ActivityZones_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActivityZones_65, 
                style: style_ActivityZones_65,
                popuplayertitle: 'Activity Zones',
                interactive: false,
    title: 'Activity Zones<br />\
    <img src="styles/legend/ActivityZones_65_0.png" /> Local Activity Centre<br />\
    <img src="styles/legend/ActivityZones_65_1.png" /> Suburban Activity Centre<br />\
    <img src="styles/legend/ActivityZones_65_2.png" /> Suburban Main Street<br />\
    <img src="styles/legend/ActivityZones_65_3.png" /> Urban Activity Centre<br />\
    <img src="styles/legend/ActivityZones_65_4.png" /> Urban Corridor (Main Street)<br />' });
var format_CapitalCityZones_66 = new ol.format.GeoJSON();
var features_CapitalCityZones_66 = format_CapitalCityZones_66.readFeatures(json_CapitalCityZones_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapitalCityZones_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapitalCityZones_66.addFeatures(features_CapitalCityZones_66);
var lyr_CapitalCityZones_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapitalCityZones_66, 
                style: style_CapitalCityZones_66,
                popuplayertitle: 'Capital City Zones',
                interactive: false,
    title: 'Capital City Zones<br />\
    <img src="styles/legend/CapitalCityZones_66_0.png" /> Adelaide Park Lands Zone<br />\
    <img src="styles/legend/CapitalCityZones_66_1.png" /> Capital City<br />\
    <img src="styles/legend/CapitalCityZones_66_2.png" /> City Living<br />\
    <img src="styles/legend/CapitalCityZones_66_3.png" /> City Main Street<br />\
    <img src="styles/legend/CapitalCityZones_66_4.png" /> City Riverbank<br />' });
var format_EmploymentZones_67 = new ol.format.GeoJSON();
var features_EmploymentZones_67 = format_EmploymentZones_67.readFeatures(json_EmploymentZones_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmploymentZones_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmploymentZones_67.addFeatures(features_EmploymentZones_67);
var lyr_EmploymentZones_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmploymentZones_67, 
                style: style_EmploymentZones_67,
                popuplayertitle: 'Employment Zones',
                interactive: false,
    title: 'Employment Zones<br />\
    <img src="styles/legend/EmploymentZones_67_0.png" /> Employment<br />\
    <img src="styles/legend/EmploymentZones_67_1.png" /> Employment (Bulk Handling)<br />\
    <img src="styles/legend/EmploymentZones_67_2.png" /> Employment (Enterprise)<br />\
    <img src="styles/legend/EmploymentZones_67_3.png" /> Resource Extraction<br />\
    <img src="styles/legend/EmploymentZones_67_4.png" /> Strategic Employment<br />\
    <img src="styles/legend/EmploymentZones_67_5.png" /> Strategic Innovation<br />\
    <img src="styles/legend/EmploymentZones_67_6.png" /> Suburban Business<br />' });
var format_InfrastructureZones_68 = new ol.format.GeoJSON();
var features_InfrastructureZones_68 = format_InfrastructureZones_68.readFeatures(json_InfrastructureZones_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastructureZones_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastructureZones_68.addFeatures(features_InfrastructureZones_68);
var lyr_InfrastructureZones_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastructureZones_68, 
                style: style_InfrastructureZones_68,
                popuplayertitle: 'Infrastructure Zones',
                interactive: false,
    title: 'Infrastructure Zones<br />\
    <img src="styles/legend/InfrastructureZones_68_0.png" /> Commonwealth Facilities<br />\
    <img src="styles/legend/InfrastructureZones_68_1.png" /> Community Facilities<br />\
    <img src="styles/legend/InfrastructureZones_68_2.png" /> Infrastructure<br />\
    <img src="styles/legend/InfrastructureZones_68_3.png" /> Infrastructure (Airfield)<br />\
    <img src="styles/legend/InfrastructureZones_68_4.png" /> Infrastructure (Ferry and Marina Facilities)<br />' });
var format_NaturalResourcesandEnvironmentZones_69 = new ol.format.GeoJSON();
var features_NaturalResourcesandEnvironmentZones_69 = format_NaturalResourcesandEnvironmentZones_69.readFeatures(json_NaturalResourcesandEnvironmentZones_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturalResourcesandEnvironmentZones_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturalResourcesandEnvironmentZones_69.addFeatures(features_NaturalResourcesandEnvironmentZones_69);
var lyr_NaturalResourcesandEnvironmentZones_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NaturalResourcesandEnvironmentZones_69, 
                style: style_NaturalResourcesandEnvironmentZones_69,
                popuplayertitle: 'Natural Resources and Environment Zones',
                interactive: false,
    title: 'Natural Resources and Environment Zones<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_69_0.png" /> Coastal Waters and Offshore Islands<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_69_1.png" /> Conservation<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_69_2.png" /> Hills Face<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_69_3.png" /> Open Space<br />\
    <img src="styles/legend/NaturalResourcesandEnvironmentZones_69_4.png" /> Recreation<br />' });
var format_NeighbourhoodandCorridorZones_70 = new ol.format.GeoJSON();
var features_NeighbourhoodandCorridorZones_70 = format_NeighbourhoodandCorridorZones_70.readFeatures(json_NeighbourhoodandCorridorZones_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NeighbourhoodandCorridorZones_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NeighbourhoodandCorridorZones_70.addFeatures(features_NeighbourhoodandCorridorZones_70);
var lyr_NeighbourhoodandCorridorZones_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NeighbourhoodandCorridorZones_70, 
                style: style_NeighbourhoodandCorridorZones_70,
                popuplayertitle: 'Neighbourhood and Corridor Zones',
                interactive: false,
    title: 'Neighbourhood and Corridor Zones<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_0.png" /> Business Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_1.png" /> Established Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_2.png" /> General Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_3.png" /> Golf Course Estate<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_4.png" /> Hills Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_5.png" /> Home Industry<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_6.png" /> Housing Diversity Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_7.png" /> Master Planned Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_8.png" /> Master Planned Renewal<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_9.png" /> Master Planned Township<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_10.png" /> Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_11.png" /> Residential Park<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_12.png" /> Rural Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_13.png" /> Suburban Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_14.png" /> Township Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_15.png" /> Urban Corridor (Boulevard)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_16.png" /> Urban Corridor (Business)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_17.png" /> Urban Corridor (Living)<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_18.png" /> Urban Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_19.png" /> Urban Renewal Neighbourhood<br />\
    <img src="styles/legend/NeighbourhoodandCorridorZones_70_20.png" /> Waterfront Neighbourhood<br />' });
var format_RuralZones_71 = new ol.format.GeoJSON();
var features_RuralZones_71 = format_RuralZones_71.readFeatures(json_RuralZones_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralZones_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralZones_71.addFeatures(features_RuralZones_71);
var lyr_RuralZones_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralZones_71, 
                style: style_RuralZones_71,
                popuplayertitle: 'Rural Zones',
                interactive: false,
    title: 'Rural Zones<br />\
    <img src="styles/legend/RuralZones_71_0.png" /> Deferred Urban<br />\
    <img src="styles/legend/RuralZones_71_1.png" /> Productive Rural Landscape<br />\
    <img src="styles/legend/RuralZones_71_2.png" /> Remote Areas<br />\
    <img src="styles/legend/RuralZones_71_3.png" /> Rural<br />\
    <img src="styles/legend/RuralZones_71_4.png" /> Rural Aquaculture<br />\
    <img src="styles/legend/RuralZones_71_5.png" /> Rural Horticulture<br />\
    <img src="styles/legend/RuralZones_71_6.png" /> Rural Intensive Enterprise<br />' });
var format_TourismZones_72 = new ol.format.GeoJSON();
var features_TourismZones_72 = format_TourismZones_72.readFeatures(json_TourismZones_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TourismZones_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TourismZones_72.addFeatures(features_TourismZones_72);
var lyr_TourismZones_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TourismZones_72, 
                style: style_TourismZones_72,
                popuplayertitle: 'Tourism Zones',
                interactive: false,
    title: 'Tourism Zones<br />\
    <img src="styles/legend/TourismZones_72_0.png" /> Caravan and Tourist Park<br />\
    <img src="styles/legend/TourismZones_72_1.png" /> Motorsport Park<br />\
    <img src="styles/legend/TourismZones_72_2.png" /> Tourism Development<br />' });
var format_TownshipandSettlementZones_73 = new ol.format.GeoJSON();
var features_TownshipandSettlementZones_73 = format_TownshipandSettlementZones_73.readFeatures(json_TownshipandSettlementZones_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TownshipandSettlementZones_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownshipandSettlementZones_73.addFeatures(features_TownshipandSettlementZones_73);
var lyr_TownshipandSettlementZones_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TownshipandSettlementZones_73, 
                style: style_TownshipandSettlementZones_73,
                popuplayertitle: 'Township and Settlement Zones',
                interactive: false,
    title: 'Township and Settlement Zones<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_0.png" /> Rural Living<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_1.png" /> Rural Settlement<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_2.png" /> Rural Shack Settlement<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_3.png" /> Township<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_4.png" /> Township Activity Centre<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_5.png" /> Township Main Street<br />\
    <img src="styles/legend/TownshipandSettlementZones_73_6.png" /> Workers Settlement<br />' });
var format_HillsFaceZone_74 = new ol.format.GeoJSON();
var features_HillsFaceZone_74 = format_HillsFaceZone_74.readFeatures(json_HillsFaceZone_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HillsFaceZone_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HillsFaceZone_74.addFeatures(features_HillsFaceZone_74);
var lyr_HillsFaceZone_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HillsFaceZone_74, 
                style: style_HillsFaceZone_74,
                popuplayertitle: 'Hills Face Zone',
                interactive: false,
                title: '<img src="styles/legend/HillsFaceZone_74.png" /> Hills Face Zone'
            });
var format_EnvironmentandFoodProductionArea_75 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_75 = format_EnvironmentandFoodProductionArea_75.readFeatures(json_EnvironmentandFoodProductionArea_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_75.addFeatures(features_EnvironmentandFoodProductionArea_75);
var lyr_EnvironmentandFoodProductionArea_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_75, 
                style: style_EnvironmentandFoodProductionArea_75,
                popuplayertitle: 'Environment and Food Production Area',
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_75.png" /> Environment and Food Production Area'
            });
var format_CharacterPreservationDistrict_76 = new ol.format.GeoJSON();
var features_CharacterPreservationDistrict_76 = format_CharacterPreservationDistrict_76.readFeatures(json_CharacterPreservationDistrict_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharacterPreservationDistrict_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharacterPreservationDistrict_76.addFeatures(features_CharacterPreservationDistrict_76);
var lyr_CharacterPreservationDistrict_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharacterPreservationDistrict_76, 
                style: style_CharacterPreservationDistrict_76,
                popuplayertitle: 'Character Preservation District',
                interactive: false,
                title: '<img src="styles/legend/CharacterPreservationDistrict_76.png" /> Character Preservation District'
            });
var format_OpenSpaceNetworkGreenways2_77 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenways2_77 = format_OpenSpaceNetworkGreenways2_77.readFeatures(json_OpenSpaceNetworkGreenways2_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenways2_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenways2_77.addFeatures(features_OpenSpaceNetworkGreenways2_77);
var lyr_OpenSpaceNetworkGreenways2_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenways2_77, 
                style: style_OpenSpaceNetworkGreenways2_77,
                popuplayertitle: 'Open Space Network - Greenways 2',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenways2_77.png" /> Open Space Network - Greenways 2'
            });
var format_OpenSpaceNetworkGreenways_78 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenways_78 = format_OpenSpaceNetworkGreenways_78.readFeatures(json_OpenSpaceNetworkGreenways_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenways_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenways_78.addFeatures(features_OpenSpaceNetworkGreenways_78);
var lyr_OpenSpaceNetworkGreenways_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenways_78, 
                style: style_OpenSpaceNetworkGreenways_78,
                popuplayertitle: 'Open Space Network - Greenways',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenways_78.png" /> Open Space Network - Greenways'
            });
var format_OpenSpaceNetworkGreenSpace_79 = new ol.format.GeoJSON();
var features_OpenSpaceNetworkGreenSpace_79 = format_OpenSpaceNetworkGreenSpace_79.readFeatures(json_OpenSpaceNetworkGreenSpace_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenSpaceNetworkGreenSpace_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpenSpaceNetworkGreenSpace_79.addFeatures(features_OpenSpaceNetworkGreenSpace_79);
var lyr_OpenSpaceNetworkGreenSpace_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpenSpaceNetworkGreenSpace_79, 
                style: style_OpenSpaceNetworkGreenSpace_79,
                popuplayertitle: 'Open Space Network - Green Space',
                interactive: false,
                title: '<img src="styles/legend/OpenSpaceNetworkGreenSpace_79.png" /> Open Space Network - Green Space'
            });
var format_InterUrbanBreaks_80 = new ol.format.GeoJSON();
var features_InterUrbanBreaks_80 = format_InterUrbanBreaks_80.readFeatures(json_InterUrbanBreaks_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterUrbanBreaks_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterUrbanBreaks_80.addFeatures(features_InterUrbanBreaks_80);
var lyr_InterUrbanBreaks_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterUrbanBreaks_80, 
                style: style_InterUrbanBreaks_80,
                popuplayertitle: 'Inter-Urban Breaks',
                interactive: false,
                title: '<img src="styles/legend/InterUrbanBreaks_80.png" /> Inter-Urban Breaks'
            });
var format_NorthernParkLands_81 = new ol.format.GeoJSON();
var features_NorthernParkLands_81 = format_NorthernParkLands_81.readFeatures(json_NorthernParkLands_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernParkLands_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernParkLands_81.addFeatures(features_NorthernParkLands_81);
var lyr_NorthernParkLands_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernParkLands_81, 
                style: style_NorthernParkLands_81,
                popuplayertitle: 'Northern Park Lands',
                interactive: false,
                title: '<img src="styles/legend/NorthernParkLands_81.png" /> Northern Park Lands'
            });
var format_FutureGreenfieldGrowthArea_82 = new ol.format.GeoJSON();
var features_FutureGreenfieldGrowthArea_82 = format_FutureGreenfieldGrowthArea_82.readFeatures(json_FutureGreenfieldGrowthArea_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldGrowthArea_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldGrowthArea_82.addFeatures(features_FutureGreenfieldGrowthArea_82);
var lyr_FutureGreenfieldGrowthArea_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldGrowthArea_82, 
                style: style_FutureGreenfieldGrowthArea_82,
                popuplayertitle: 'Future Greenfield Growth Area',
                interactive: false,
                title: '<img src="styles/legend/FutureGreenfieldGrowthArea_82.png" /> Future Greenfield Growth Area'
            });
var format_FutureGreenfieldSupplyinEFPA_83 = new ol.format.GeoJSON();
var features_FutureGreenfieldSupplyinEFPA_83 = format_FutureGreenfieldSupplyinEFPA_83.readFeatures(json_FutureGreenfieldSupplyinEFPA_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureGreenfieldSupplyinEFPA_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureGreenfieldSupplyinEFPA_83.addFeatures(features_FutureGreenfieldSupplyinEFPA_83);
var lyr_FutureGreenfieldSupplyinEFPA_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureGreenfieldSupplyinEFPA_83, 
                style: style_FutureGreenfieldSupplyinEFPA_83,
                popuplayertitle: 'Future Greenfield Supply - in EFPA',
                interactive: false,
                title: '<img src="styles/legend/FutureGreenfieldSupplyinEFPA_83.png" /> Future Greenfield Supply - in EFPA'
            });
var format_StateInnovationPlaces_84 = new ol.format.GeoJSON();
var features_StateInnovationPlaces_84 = format_StateInnovationPlaces_84.readFeatures(json_StateInnovationPlaces_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateInnovationPlaces_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateInnovationPlaces_84.addFeatures(features_StateInnovationPlaces_84);
var lyr_StateInnovationPlaces_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateInnovationPlaces_84, 
                style: style_StateInnovationPlaces_84,
                popuplayertitle: 'State Innovation Places',
                interactive: false,
                title: '<img src="styles/legend/StateInnovationPlaces_84.png" /> State Innovation Places'
            });
var format_PrimeIndustrialEmploymentPrecinct_85 = new ol.format.GeoJSON();
var features_PrimeIndustrialEmploymentPrecinct_85 = format_PrimeIndustrialEmploymentPrecinct_85.readFeatures(json_PrimeIndustrialEmploymentPrecinct_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimeIndustrialEmploymentPrecinct_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimeIndustrialEmploymentPrecinct_85.addFeatures(features_PrimeIndustrialEmploymentPrecinct_85);
var lyr_PrimeIndustrialEmploymentPrecinct_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrimeIndustrialEmploymentPrecinct_85, 
                style: style_PrimeIndustrialEmploymentPrecinct_85,
                popuplayertitle: 'Prime Industrial Employment Precinct',
                interactive: false,
                title: '<img src="styles/legend/PrimeIndustrialEmploymentPrecinct_85.png" /> Prime Industrial Employment Precinct'
            });
var format_NationalEmploymentEconomicCluster_86 = new ol.format.GeoJSON();
var features_NationalEmploymentEconomicCluster_86 = format_NationalEmploymentEconomicCluster_86.readFeatures(json_NationalEmploymentEconomicCluster_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalEmploymentEconomicCluster_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalEmploymentEconomicCluster_86.addFeatures(features_NationalEmploymentEconomicCluster_86);
var lyr_NationalEmploymentEconomicCluster_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalEmploymentEconomicCluster_86, 
                style: style_NationalEmploymentEconomicCluster_86,
                popuplayertitle: 'National Employment (Economic) Cluster',
                interactive: false,
                title: '<img src="styles/legend/NationalEmploymentEconomicCluster_86.png" /> National Employment (Economic) Cluster'
            });
var format_StateSignificantIndustrialEmploymentPrecinct_87 = new ol.format.GeoJSON();
var features_StateSignificantIndustrialEmploymentPrecinct_87 = format_StateSignificantIndustrialEmploymentPrecinct_87.readFeatures(json_StateSignificantIndustrialEmploymentPrecinct_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantIndustrialEmploymentPrecinct_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantIndustrialEmploymentPrecinct_87.addFeatures(features_StateSignificantIndustrialEmploymentPrecinct_87);
var lyr_StateSignificantIndustrialEmploymentPrecinct_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantIndustrialEmploymentPrecinct_87, 
                style: style_StateSignificantIndustrialEmploymentPrecinct_87,
                popuplayertitle: 'State Significant Industrial Employment Precinct',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantIndustrialEmploymentPrecinct_87.png" /> State Significant Industrial Employment Precinct'
            });
var format_FutureEmployment_88 = new ol.format.GeoJSON();
var features_FutureEmployment_88 = format_FutureEmployment_88.readFeatures(json_FutureEmployment_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureEmployment_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureEmployment_88.addFeatures(features_FutureEmployment_88);
var lyr_FutureEmployment_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureEmployment_88, 
                style: style_FutureEmployment_88,
                popuplayertitle: 'Future Employment',
                interactive: false,
                title: '<img src="styles/legend/FutureEmployment_88.png" /> Future Employment'
            });
var format_StateSignificantInfillAreas_89 = new ol.format.GeoJSON();
var features_StateSignificantInfillAreas_89 = format_StateSignificantInfillAreas_89.readFeatures(json_StateSignificantInfillAreas_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantInfillAreas_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantInfillAreas_89.addFeatures(features_StateSignificantInfillAreas_89);
var lyr_StateSignificantInfillAreas_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantInfillAreas_89, 
                style: style_StateSignificantInfillAreas_89,
                popuplayertitle: 'State Significant Infill Areas',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantInfillAreas_89.png" /> State Significant Infill Areas'
            });
var format_LocalInfillInvestigationAreas_90 = new ol.format.GeoJSON();
var features_LocalInfillInvestigationAreas_90 = format_LocalInfillInvestigationAreas_90.readFeatures(json_LocalInfillInvestigationAreas_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalInfillInvestigationAreas_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalInfillInvestigationAreas_90.addFeatures(features_LocalInfillInvestigationAreas_90);
var lyr_LocalInfillInvestigationAreas_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalInfillInvestigationAreas_90, 
                style: style_LocalInfillInvestigationAreas_90,
                popuplayertitle: 'Local Infill Investigation Areas',
                interactive: false,
                title: '<img src="styles/legend/LocalInfillInvestigationAreas_90.png" /> Local Infill Investigation Areas'
            });
var format_NorthernParkLandsGreenCorridorLink_91 = new ol.format.GeoJSON();
var features_NorthernParkLandsGreenCorridorLink_91 = format_NorthernParkLandsGreenCorridorLink_91.readFeatures(json_NorthernParkLandsGreenCorridorLink_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthernParkLandsGreenCorridorLink_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthernParkLandsGreenCorridorLink_91.addFeatures(features_NorthernParkLandsGreenCorridorLink_91);
var lyr_NorthernParkLandsGreenCorridorLink_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthernParkLandsGreenCorridorLink_91, 
                style: style_NorthernParkLandsGreenCorridorLink_91,
                popuplayertitle: 'Northern Park Lands Green Corridor Link',
                interactive: false,
                title: '<img src="styles/legend/NorthernParkLandsGreenCorridorLink_91.png" /> Northern Park Lands Green Corridor Link'
            });
var format_TransportInvestigations_92 = new ol.format.GeoJSON();
var features_TransportInvestigations_92 = format_TransportInvestigations_92.readFeatures(json_TransportInvestigations_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransportInvestigations_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransportInvestigations_92.addFeatures(features_TransportInvestigations_92);
var lyr_TransportInvestigations_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransportInvestigations_92, 
                style: style_TransportInvestigations_92,
                popuplayertitle: 'Transport Investigations',
                interactive: false,
                title: '<img src="styles/legend/TransportInvestigations_92.png" /> Transport Investigations'
            });
var format_ExistingRailwayCorridors_93 = new ol.format.GeoJSON();
var features_ExistingRailwayCorridors_93 = format_ExistingRailwayCorridors_93.readFeatures(json_ExistingRailwayCorridors_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingRailwayCorridors_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingRailwayCorridors_93.addFeatures(features_ExistingRailwayCorridors_93);
var lyr_ExistingRailwayCorridors_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingRailwayCorridors_93, 
                style: style_ExistingRailwayCorridors_93,
                popuplayertitle: 'Existing Railway Corridors',
                interactive: false,
                title: '<img src="styles/legend/ExistingRailwayCorridors_93.png" /> Existing Railway Corridors'
            });
var format_PotentialGreaterAdelaideFreightBypass_94 = new ol.format.GeoJSON();
var features_PotentialGreaterAdelaideFreightBypass_94 = format_PotentialGreaterAdelaideFreightBypass_94.readFeatures(json_PotentialGreaterAdelaideFreightBypass_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialGreaterAdelaideFreightBypass_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialGreaterAdelaideFreightBypass_94.addFeatures(features_PotentialGreaterAdelaideFreightBypass_94);
var lyr_PotentialGreaterAdelaideFreightBypass_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotentialGreaterAdelaideFreightBypass_94, 
                style: style_PotentialGreaterAdelaideFreightBypass_94,
                popuplayertitle: 'Potential Greater Adelaide Freight Bypass',
                interactive: false,
                title: '<img src="styles/legend/PotentialGreaterAdelaideFreightBypass_94.png" /> Potential Greater Adelaide Freight Bypass'
            });
var format_BusRoutesPublicTransport_95 = new ol.format.GeoJSON();
var features_BusRoutesPublicTransport_95 = format_BusRoutesPublicTransport_95.readFeatures(json_BusRoutesPublicTransport_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusRoutesPublicTransport_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusRoutesPublicTransport_95.addFeatures(features_BusRoutesPublicTransport_95);
var lyr_BusRoutesPublicTransport_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusRoutesPublicTransport_95, 
                style: style_BusRoutesPublicTransport_95,
                popuplayertitle: 'Bus Routes Public Transport',
                interactive: false,
                title: '<img src="styles/legend/BusRoutesPublicTransport_95.png" /> Bus Routes Public Transport'
            });
var format_ExistingMajorTransportRoutes_96 = new ol.format.GeoJSON();
var features_ExistingMajorTransportRoutes_96 = format_ExistingMajorTransportRoutes_96.readFeatures(json_ExistingMajorTransportRoutes_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingMajorTransportRoutes_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingMajorTransportRoutes_96.addFeatures(features_ExistingMajorTransportRoutes_96);
var lyr_ExistingMajorTransportRoutes_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingMajorTransportRoutes_96, 
                style: style_ExistingMajorTransportRoutes_96,
                popuplayertitle: 'Existing Major Transport Routes',
                interactive: false,
                title: '<img src="styles/legend/ExistingMajorTransportRoutes_96.png" /> Existing Major Transport Routes'
            });
var format_Seaport_97 = new ol.format.GeoJSON();
var features_Seaport_97 = format_Seaport_97.readFeatures(json_Seaport_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seaport_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seaport_97.addFeatures(features_Seaport_97);
var lyr_Seaport_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seaport_97, 
                style: style_Seaport_97,
                popuplayertitle: 'Seaport',
                interactive: false,
                title: '<img src="styles/legend/Seaport_97.png" /> Seaport'
            });
var format_AirportsandAirfields_98 = new ol.format.GeoJSON();
var features_AirportsandAirfields_98 = format_AirportsandAirfields_98.readFeatures(json_AirportsandAirfields_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirportsandAirfields_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirportsandAirfields_98.addFeatures(features_AirportsandAirfields_98);
var lyr_AirportsandAirfields_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirportsandAirfields_98, 
                style: style_AirportsandAirfields_98,
                popuplayertitle: 'Airports and Airfields',
                interactive: false,
                title: '<img src="styles/legend/AirportsandAirfields_98.png" /> Airports and Airfields'
            });
var format_GARPLGA_99 = new ol.format.GeoJSON();
var features_GARPLGA_99 = format_GARPLGA_99.readFeatures(json_GARPLGA_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARPLGA_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARPLGA_99.addFeatures(features_GARPLGA_99);
var lyr_GARPLGA_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARPLGA_99, 
                style: style_GARPLGA_99,
                popuplayertitle: 'GARP-LGA',
                interactive: false,
                title: '<img src="styles/legend/GARPLGA_99.png" /> GARP-LGA'
            });
var format_AdelaideHills_100 = new ol.format.GeoJSON();
var features_AdelaideHills_100 = format_AdelaideHills_100.readFeatures(json_AdelaideHills_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaideHills_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaideHills_100.addFeatures(features_AdelaideHills_100);
var lyr_AdelaideHills_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaideHills_100, 
                style: style_AdelaideHills_100,
                popuplayertitle: 'Adelaide Hills',
                interactive: true,
                title: '<img src="styles/legend/AdelaideHills_100.png" /> Adelaide Hills'
            });
var format_AdelaidePlains_101 = new ol.format.GeoJSON();
var features_AdelaidePlains_101 = format_AdelaidePlains_101.readFeatures(json_AdelaidePlains_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaidePlains_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaidePlains_101.addFeatures(features_AdelaidePlains_101);
var lyr_AdelaidePlains_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaidePlains_101, 
                style: style_AdelaidePlains_101,
                popuplayertitle: 'Adelaide Plains',
                interactive: true,
                title: '<img src="styles/legend/AdelaidePlains_101.png" /> Adelaide Plains'
            });
var format_Adelaide_102 = new ol.format.GeoJSON();
var features_Adelaide_102 = format_Adelaide_102.readFeatures(json_Adelaide_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adelaide_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adelaide_102.addFeatures(features_Adelaide_102);
var lyr_Adelaide_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adelaide_102, 
                style: style_Adelaide_102,
                popuplayertitle: 'Adelaide',
                interactive: true,
                title: '<img src="styles/legend/Adelaide_102.png" /> Adelaide'
            });
var format_Alexandrina_103 = new ol.format.GeoJSON();
var features_Alexandrina_103 = format_Alexandrina_103.readFeatures(json_Alexandrina_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alexandrina_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alexandrina_103.addFeatures(features_Alexandrina_103);
var lyr_Alexandrina_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alexandrina_103, 
                style: style_Alexandrina_103,
                popuplayertitle: 'Alexandrina',
                interactive: true,
                title: '<img src="styles/legend/Alexandrina_103.png" /> Alexandrina'
            });
var format_Barossa_104 = new ol.format.GeoJSON();
var features_Barossa_104 = format_Barossa_104.readFeatures(json_Barossa_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barossa_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barossa_104.addFeatures(features_Barossa_104);
var lyr_Barossa_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barossa_104, 
                style: style_Barossa_104,
                popuplayertitle: 'Barossa',
                interactive: true,
                title: '<img src="styles/legend/Barossa_104.png" /> Barossa'
            });
var format_Burnside_105 = new ol.format.GeoJSON();
var features_Burnside_105 = format_Burnside_105.readFeatures(json_Burnside_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Burnside_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Burnside_105.addFeatures(features_Burnside_105);
var lyr_Burnside_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Burnside_105, 
                style: style_Burnside_105,
                popuplayertitle: 'Burnside',
                interactive: true,
                title: '<img src="styles/legend/Burnside_105.png" /> Burnside'
            });
var format_CampbelltownSA_106 = new ol.format.GeoJSON();
var features_CampbelltownSA_106 = format_CampbelltownSA_106.readFeatures(json_CampbelltownSA_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampbelltownSA_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampbelltownSA_106.addFeatures(features_CampbelltownSA_106);
var lyr_CampbelltownSA_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CampbelltownSA_106, 
                style: style_CampbelltownSA_106,
                popuplayertitle: 'Campbelltown (SA)',
                interactive: true,
                title: '<img src="styles/legend/CampbelltownSA_106.png" /> Campbelltown (SA)'
            });
var format_CharlesSturt_107 = new ol.format.GeoJSON();
var features_CharlesSturt_107 = format_CharlesSturt_107.readFeatures(json_CharlesSturt_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharlesSturt_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharlesSturt_107.addFeatures(features_CharlesSturt_107);
var lyr_CharlesSturt_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharlesSturt_107, 
                style: style_CharlesSturt_107,
                popuplayertitle: 'Charles Sturt',
                interactive: true,
                title: '<img src="styles/legend/CharlesSturt_107.png" /> Charles Sturt'
            });
var format_Gawler_108 = new ol.format.GeoJSON();
var features_Gawler_108 = format_Gawler_108.readFeatures(json_Gawler_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gawler_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gawler_108.addFeatures(features_Gawler_108);
var lyr_Gawler_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gawler_108, 
                style: style_Gawler_108,
                popuplayertitle: 'Gawler',
                interactive: true,
                title: '<img src="styles/legend/Gawler_108.png" /> Gawler'
            });
var format_HoldfastBay_109 = new ol.format.GeoJSON();
var features_HoldfastBay_109 = format_HoldfastBay_109.readFeatures(json_HoldfastBay_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HoldfastBay_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HoldfastBay_109.addFeatures(features_HoldfastBay_109);
var lyr_HoldfastBay_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HoldfastBay_109, 
                style: style_HoldfastBay_109,
                popuplayertitle: 'Holdfast Bay',
                interactive: true,
                title: '<img src="styles/legend/HoldfastBay_109.png" /> Holdfast Bay'
            });
var format_Light_110 = new ol.format.GeoJSON();
var features_Light_110 = format_Light_110.readFeatures(json_Light_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Light_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Light_110.addFeatures(features_Light_110);
var lyr_Light_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Light_110, 
                style: style_Light_110,
                popuplayertitle: 'Light',
                interactive: true,
                title: '<img src="styles/legend/Light_110.png" /> Light'
            });
var format_Marion_111 = new ol.format.GeoJSON();
var features_Marion_111 = format_Marion_111.readFeatures(json_Marion_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marion_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marion_111.addFeatures(features_Marion_111);
var lyr_Marion_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marion_111, 
                style: style_Marion_111,
                popuplayertitle: 'Marion',
                interactive: true,
                title: '<img src="styles/legend/Marion_111.png" /> Marion'
            });
var format_Mitcham_112 = new ol.format.GeoJSON();
var features_Mitcham_112 = format_Mitcham_112.readFeatures(json_Mitcham_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mitcham_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mitcham_112.addFeatures(features_Mitcham_112);
var lyr_Mitcham_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mitcham_112, 
                style: style_Mitcham_112,
                popuplayertitle: 'Mitcham',
                interactive: true,
                title: '<img src="styles/legend/Mitcham_112.png" /> Mitcham'
            });
var format_MountBarker_113 = new ol.format.GeoJSON();
var features_MountBarker_113 = format_MountBarker_113.readFeatures(json_MountBarker_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MountBarker_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MountBarker_113.addFeatures(features_MountBarker_113);
var lyr_MountBarker_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MountBarker_113, 
                style: style_MountBarker_113,
                popuplayertitle: 'Mount Barker',
                interactive: true,
                title: '<img src="styles/legend/MountBarker_113.png" /> Mount Barker'
            });
var format_MurrayBridge_114 = new ol.format.GeoJSON();
var features_MurrayBridge_114 = format_MurrayBridge_114.readFeatures(json_MurrayBridge_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayBridge_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayBridge_114.addFeatures(features_MurrayBridge_114);
var lyr_MurrayBridge_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayBridge_114, 
                style: style_MurrayBridge_114,
                popuplayertitle: 'Murray Bridge',
                interactive: true,
                title: '<img src="styles/legend/MurrayBridge_114.png" /> Murray Bridge'
            });
var format_NorwoodPaynehamandStPeters_115 = new ol.format.GeoJSON();
var features_NorwoodPaynehamandStPeters_115 = format_NorwoodPaynehamandStPeters_115.readFeatures(json_NorwoodPaynehamandStPeters_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorwoodPaynehamandStPeters_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorwoodPaynehamandStPeters_115.addFeatures(features_NorwoodPaynehamandStPeters_115);
var lyr_NorwoodPaynehamandStPeters_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorwoodPaynehamandStPeters_115, 
                style: style_NorwoodPaynehamandStPeters_115,
                popuplayertitle: 'Norwood Payneham and St Peters',
                interactive: true,
                title: '<img src="styles/legend/NorwoodPaynehamandStPeters_115.png" /> Norwood Payneham and St Peters'
            });
var format_Onkaparinga_116 = new ol.format.GeoJSON();
var features_Onkaparinga_116 = format_Onkaparinga_116.readFeatures(json_Onkaparinga_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Onkaparinga_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Onkaparinga_116.addFeatures(features_Onkaparinga_116);
var lyr_Onkaparinga_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Onkaparinga_116, 
                style: style_Onkaparinga_116,
                popuplayertitle: 'Onkaparinga',
                interactive: true,
                title: '<img src="styles/legend/Onkaparinga_116.png" /> Onkaparinga'
            });
var format_Playford_117 = new ol.format.GeoJSON();
var features_Playford_117 = format_Playford_117.readFeatures(json_Playford_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Playford_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Playford_117.addFeatures(features_Playford_117);
var lyr_Playford_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Playford_117, 
                style: style_Playford_117,
                popuplayertitle: 'Playford',
                interactive: true,
                title: '<img src="styles/legend/Playford_117.png" /> Playford'
            });
var format_PortAdelaideEnfield_118 = new ol.format.GeoJSON();
var features_PortAdelaideEnfield_118 = format_PortAdelaideEnfield_118.readFeatures(json_PortAdelaideEnfield_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PortAdelaideEnfield_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortAdelaideEnfield_118.addFeatures(features_PortAdelaideEnfield_118);
var lyr_PortAdelaideEnfield_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortAdelaideEnfield_118, 
                style: style_PortAdelaideEnfield_118,
                popuplayertitle: 'Port Adelaide Enfield',
                interactive: true,
                title: '<img src="styles/legend/PortAdelaideEnfield_118.png" /> Port Adelaide Enfield'
            });
var format_Prospect_119 = new ol.format.GeoJSON();
var features_Prospect_119 = format_Prospect_119.readFeatures(json_Prospect_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prospect_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prospect_119.addFeatures(features_Prospect_119);
var lyr_Prospect_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prospect_119, 
                style: style_Prospect_119,
                popuplayertitle: 'Prospect',
                interactive: true,
                title: '<img src="styles/legend/Prospect_119.png" /> Prospect'
            });
var format_Salisbury_120 = new ol.format.GeoJSON();
var features_Salisbury_120 = format_Salisbury_120.readFeatures(json_Salisbury_120, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salisbury_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Salisbury_120.addFeatures(features_Salisbury_120);
var lyr_Salisbury_120 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Salisbury_120, 
                style: style_Salisbury_120,
                popuplayertitle: 'Salisbury',
                interactive: true,
                title: '<img src="styles/legend/Salisbury_120.png" /> Salisbury'
            });
var format_TeaTreeGully_121 = new ol.format.GeoJSON();
var features_TeaTreeGully_121 = format_TeaTreeGully_121.readFeatures(json_TeaTreeGully_121, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TeaTreeGully_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TeaTreeGully_121.addFeatures(features_TeaTreeGully_121);
var lyr_TeaTreeGully_121 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TeaTreeGully_121, 
                style: style_TeaTreeGully_121,
                popuplayertitle: 'Tea Tree Gully',
                interactive: true,
                title: '<img src="styles/legend/TeaTreeGully_121.png" /> Tea Tree Gully'
            });
var format_Unley_122 = new ol.format.GeoJSON();
var features_Unley_122 = format_Unley_122.readFeatures(json_Unley_122, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Unley_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unley_122.addFeatures(features_Unley_122);
var lyr_Unley_122 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unley_122, 
                style: style_Unley_122,
                popuplayertitle: 'Unley',
                interactive: true,
                title: '<img src="styles/legend/Unley_122.png" /> Unley'
            });
var format_VictorHarbor_123 = new ol.format.GeoJSON();
var features_VictorHarbor_123 = format_VictorHarbor_123.readFeatures(json_VictorHarbor_123, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VictorHarbor_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VictorHarbor_123.addFeatures(features_VictorHarbor_123);
var lyr_VictorHarbor_123 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VictorHarbor_123, 
                style: style_VictorHarbor_123,
                popuplayertitle: 'Victor Harbor',
                interactive: true,
                title: '<img src="styles/legend/VictorHarbor_123.png" /> Victor Harbor'
            });
var format_Walkerville_124 = new ol.format.GeoJSON();
var features_Walkerville_124 = format_Walkerville_124.readFeatures(json_Walkerville_124, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walkerville_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkerville_124.addFeatures(features_Walkerville_124);
var lyr_Walkerville_124 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walkerville_124, 
                style: style_Walkerville_124,
                popuplayertitle: 'Walkerville',
                interactive: true,
                title: '<img src="styles/legend/Walkerville_124.png" /> Walkerville'
            });
var format_WestTorrens_125 = new ol.format.GeoJSON();
var features_WestTorrens_125 = format_WestTorrens_125.readFeatures(json_WestTorrens_125, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestTorrens_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestTorrens_125.addFeatures(features_WestTorrens_125);
var lyr_WestTorrens_125 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestTorrens_125, 
                style: style_WestTorrens_125,
                popuplayertitle: 'West Torrens',
                interactive: true,
                title: '<img src="styles/legend/WestTorrens_125.png" /> West Torrens'
            });
var format_Yankalilla_126 = new ol.format.GeoJSON();
var features_Yankalilla_126 = format_Yankalilla_126.readFeatures(json_Yankalilla_126, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yankalilla_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yankalilla_126.addFeatures(features_Yankalilla_126);
var lyr_Yankalilla_126 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yankalilla_126, 
                style: style_Yankalilla_126,
                popuplayertitle: 'Yankalilla',
                interactive: true,
                title: '<img src="styles/legend/Yankalilla_126.png" /> Yankalilla'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_GARPLGA_99,lyr_AdelaideHills_100,lyr_AdelaidePlains_101,lyr_Adelaide_102,lyr_Alexandrina_103,lyr_Barossa_104,lyr_Burnside_105,lyr_CampbelltownSA_106,lyr_CharlesSturt_107,lyr_Gawler_108,lyr_HoldfastBay_109,lyr_Light_110,lyr_Marion_111,lyr_Mitcham_112,lyr_MountBarker_113,lyr_MurrayBridge_114,lyr_NorwoodPaynehamandStPeters_115,lyr_Onkaparinga_116,lyr_Playford_117,lyr_PortAdelaideEnfield_118,lyr_Prospect_119,lyr_Salisbury_120,lyr_TeaTreeGully_121,lyr_Unley_122,lyr_VictorHarbor_123,lyr_Walkerville_124,lyr_WestTorrens_125,lyr_Yankalilla_126,],
                                fold: "open",
                                title: 'Administrative'});
var group_GarpVisionMapElements = new ol.layer.Group({
                                layers: [lyr_HillsFaceZone_74,lyr_EnvironmentandFoodProductionArea_75,lyr_CharacterPreservationDistrict_76,lyr_OpenSpaceNetworkGreenways2_77,lyr_OpenSpaceNetworkGreenways_78,lyr_OpenSpaceNetworkGreenSpace_79,lyr_InterUrbanBreaks_80,lyr_NorthernParkLands_81,lyr_FutureGreenfieldGrowthArea_82,lyr_FutureGreenfieldSupplyinEFPA_83,lyr_StateInnovationPlaces_84,lyr_PrimeIndustrialEmploymentPrecinct_85,lyr_NationalEmploymentEconomicCluster_86,lyr_StateSignificantIndustrialEmploymentPrecinct_87,lyr_FutureEmployment_88,lyr_StateSignificantInfillAreas_89,lyr_LocalInfillInvestigationAreas_90,lyr_NorthernParkLandsGreenCorridorLink_91,lyr_TransportInvestigations_92,lyr_ExistingRailwayCorridors_93,lyr_PotentialGreaterAdelaideFreightBypass_94,lyr_BusRoutesPublicTransport_95,lyr_ExistingMajorTransportRoutes_96,lyr_Seaport_97,lyr_AirportsandAirfields_98,],
                                fold: "open",
                                title: 'Garp Vision Map Elements'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_ActivityZones_65,lyr_CapitalCityZones_66,lyr_EmploymentZones_67,lyr_InfrastructureZones_68,lyr_NaturalResourcesandEnvironmentZones_69,lyr_NeighbourhoodandCorridorZones_70,lyr_RuralZones_71,lyr_TourismZones_72,lyr_TownshipandSettlementZones_73,],
                                fold: "open",
                                title: 'Zoning'});
var group_NDHDeductedOverlays = new ol.layer.Group({
                                layers: [lyr_SignificantInterfaceManagement_47,lyr_ResourceExtractionProtectionArea_48,lyr_LimitedLandDivision_49,lyr_CoastalFlooding_50,lyr_CoastalAreas_51,lyr_AdelaideDolphinSanctuary_52,lyr_TunnelProtection_53,lyr_NonstopCorridor_54,lyr_KeyRailwayCrossings_55,lyr_GasandLiquidPetroleumPipelines_56,lyr_GasandLiquidPetroleumPipelinesFacilities_57,lyr_DefenceAviationArea_58,lyr_StateHeritageArea_59,lyr_StateHeritagePlace_60,lyr_HistoricAreaOverlay_61,lyr_HazardsFloodingHigh_62,lyr_WaterProtectionArea_63,lyr_HazardsAcidSulfateSoils_64,],
                                fold: "open",
                                title: 'NDH Deducted Overlays'});
var group_NotetoDueDiligenceOverlay = new ol.layer.Group({
                                layers: [lyr_UrbanTreeCanopy_8,lyr_TrafficGeneratingDevelopment_9,lyr_StormwaterManagement_10,lyr_StateSignificantNativeVegetation_11,lyr_SignificantLandscapeProtection_12,lyr_ScenicQuality_13,lyr_RiverMurrayTributariesProtectionArea_14,lyr_RiverMurrayFloodplainProtection_15,lyr_RegulatedandSignificantTree_16,lyr_RamsarWetlands_17,lyr_PrescribedWellsArea_18,lyr_PrescribedWatercourses_19,lyr_PrescribedWaterResourcesArea_20,lyr_PrescribedSurfaceWaterAreas_21,lyr_NoiseandAirEmissions_22,lyr_NativeVegetation_23,lyr_MurrayDarlingBasin_24,lyr_MountLoftyRangesCatchmentArea2_25,lyr_MountLoftyRangesCatchmentArea1_26,lyr_MarineParksRestrictedUse_27,lyr_MarineParksManagedUse_28,lyr_LocalHeritagePlace_29,lyr_LimitedDwelling_30,lyr_KeyOutbackandRuralRoutes_31,lyr_InterfaceManagement_32,lyr_HeritageAdjacency_33,lyr_HazardsBushfireMediumRisk_34,lyr_HazardsBushfireHighRisk_35,lyr_HazardsBushfireGeneralRisk_36,lyr_Gateway_37,lyr_EnvironmentandFoodProductionArea_38,lyr_DwellingExcision_39,lyr_Design_40,lyr_CharacterPreservationDistrict_41,lyr_BuildingNearAirfields_42,lyr_AirportBuildingHeightsRegulated_43,lyr_AirportBuildingHeightsAircraftLandingArea_44,lyr_AircraftNoiseExposure_45,lyr_AdvertisingNearSignalisedIntersections_46,],
                                fold: "open",
                                title: 'Note to Due Diligence Overlay'});
var group_OtherOverlays = new ol.layer.Group({
                                layers: [lyr_UrbanTransportRoutes_2,lyr_FutureRoadWidening_3,lyr_FutureLocalRoadWidening_4,lyr_CharacterAreaOverlay_5,lyr_AffordableHousing_6,lyr_MajorUrbanTransportRoutes_7,],
                                fold: "open",
                                title: 'Other Overlays'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_UrbanTransportRoutes_2.setVisible(false);lyr_FutureRoadWidening_3.setVisible(false);lyr_FutureLocalRoadWidening_4.setVisible(false);lyr_CharacterAreaOverlay_5.setVisible(false);lyr_AffordableHousing_6.setVisible(false);lyr_MajorUrbanTransportRoutes_7.setVisible(false);lyr_UrbanTreeCanopy_8.setVisible(false);lyr_TrafficGeneratingDevelopment_9.setVisible(false);lyr_StormwaterManagement_10.setVisible(false);lyr_StateSignificantNativeVegetation_11.setVisible(false);lyr_SignificantLandscapeProtection_12.setVisible(false);lyr_ScenicQuality_13.setVisible(false);lyr_RiverMurrayTributariesProtectionArea_14.setVisible(false);lyr_RiverMurrayFloodplainProtection_15.setVisible(false);lyr_RegulatedandSignificantTree_16.setVisible(false);lyr_RamsarWetlands_17.setVisible(false);lyr_PrescribedWellsArea_18.setVisible(false);lyr_PrescribedWatercourses_19.setVisible(false);lyr_PrescribedWaterResourcesArea_20.setVisible(false);lyr_PrescribedSurfaceWaterAreas_21.setVisible(false);lyr_NoiseandAirEmissions_22.setVisible(false);lyr_NativeVegetation_23.setVisible(false);lyr_MurrayDarlingBasin_24.setVisible(false);lyr_MountLoftyRangesCatchmentArea2_25.setVisible(false);lyr_MountLoftyRangesCatchmentArea1_26.setVisible(false);lyr_MarineParksRestrictedUse_27.setVisible(false);lyr_MarineParksManagedUse_28.setVisible(false);lyr_LocalHeritagePlace_29.setVisible(false);lyr_LimitedDwelling_30.setVisible(false);lyr_KeyOutbackandRuralRoutes_31.setVisible(false);lyr_InterfaceManagement_32.setVisible(false);lyr_HeritageAdjacency_33.setVisible(false);lyr_HazardsBushfireMediumRisk_34.setVisible(false);lyr_HazardsBushfireHighRisk_35.setVisible(false);lyr_HazardsBushfireGeneralRisk_36.setVisible(false);lyr_Gateway_37.setVisible(false);lyr_EnvironmentandFoodProductionArea_38.setVisible(false);lyr_DwellingExcision_39.setVisible(false);lyr_Design_40.setVisible(false);lyr_CharacterPreservationDistrict_41.setVisible(false);lyr_BuildingNearAirfields_42.setVisible(false);lyr_AirportBuildingHeightsRegulated_43.setVisible(false);lyr_AirportBuildingHeightsAircraftLandingArea_44.setVisible(false);lyr_AircraftNoiseExposure_45.setVisible(false);lyr_AdvertisingNearSignalisedIntersections_46.setVisible(false);lyr_SignificantInterfaceManagement_47.setVisible(false);lyr_ResourceExtractionProtectionArea_48.setVisible(false);lyr_LimitedLandDivision_49.setVisible(false);lyr_CoastalFlooding_50.setVisible(false);lyr_CoastalAreas_51.setVisible(false);lyr_AdelaideDolphinSanctuary_52.setVisible(false);lyr_TunnelProtection_53.setVisible(false);lyr_NonstopCorridor_54.setVisible(false);lyr_KeyRailwayCrossings_55.setVisible(false);lyr_GasandLiquidPetroleumPipelines_56.setVisible(false);lyr_GasandLiquidPetroleumPipelinesFacilities_57.setVisible(false);lyr_DefenceAviationArea_58.setVisible(false);lyr_StateHeritageArea_59.setVisible(false);lyr_StateHeritagePlace_60.setVisible(false);lyr_HistoricAreaOverlay_61.setVisible(false);lyr_HazardsFloodingHigh_62.setVisible(false);lyr_WaterProtectionArea_63.setVisible(false);lyr_HazardsAcidSulfateSoils_64.setVisible(false);lyr_ActivityZones_65.setVisible(false);lyr_CapitalCityZones_66.setVisible(false);lyr_EmploymentZones_67.setVisible(false);lyr_InfrastructureZones_68.setVisible(false);lyr_NaturalResourcesandEnvironmentZones_69.setVisible(false);lyr_NeighbourhoodandCorridorZones_70.setVisible(false);lyr_RuralZones_71.setVisible(false);lyr_TourismZones_72.setVisible(false);lyr_TownshipandSettlementZones_73.setVisible(false);lyr_HillsFaceZone_74.setVisible(false);lyr_EnvironmentandFoodProductionArea_75.setVisible(false);lyr_CharacterPreservationDistrict_76.setVisible(false);lyr_OpenSpaceNetworkGreenways2_77.setVisible(true);lyr_OpenSpaceNetworkGreenways_78.setVisible(true);lyr_OpenSpaceNetworkGreenSpace_79.setVisible(true);lyr_InterUrbanBreaks_80.setVisible(false);lyr_NorthernParkLands_81.setVisible(false);lyr_FutureGreenfieldGrowthArea_82.setVisible(true);lyr_FutureGreenfieldSupplyinEFPA_83.setVisible(true);lyr_StateInnovationPlaces_84.setVisible(false);lyr_PrimeIndustrialEmploymentPrecinct_85.setVisible(false);lyr_NationalEmploymentEconomicCluster_86.setVisible(false);lyr_StateSignificantIndustrialEmploymentPrecinct_87.setVisible(false);lyr_FutureEmployment_88.setVisible(true);lyr_StateSignificantInfillAreas_89.setVisible(true);lyr_LocalInfillInvestigationAreas_90.setVisible(true);lyr_NorthernParkLandsGreenCorridorLink_91.setVisible(false);lyr_TransportInvestigations_92.setVisible(true);lyr_ExistingRailwayCorridors_93.setVisible(true);lyr_PotentialGreaterAdelaideFreightBypass_94.setVisible(true);lyr_BusRoutesPublicTransport_95.setVisible(true);lyr_ExistingMajorTransportRoutes_96.setVisible(false);lyr_Seaport_97.setVisible(true);lyr_AirportsandAirfields_98.setVisible(true);lyr_GARPLGA_99.setVisible(true);lyr_AdelaideHills_100.setVisible(true);lyr_AdelaidePlains_101.setVisible(true);lyr_Adelaide_102.setVisible(true);lyr_Alexandrina_103.setVisible(true);lyr_Barossa_104.setVisible(true);lyr_Burnside_105.setVisible(true);lyr_CampbelltownSA_106.setVisible(true);lyr_CharlesSturt_107.setVisible(true);lyr_Gawler_108.setVisible(true);lyr_HoldfastBay_109.setVisible(true);lyr_Light_110.setVisible(true);lyr_Marion_111.setVisible(true);lyr_Mitcham_112.setVisible(true);lyr_MountBarker_113.setVisible(true);lyr_MurrayBridge_114.setVisible(true);lyr_NorwoodPaynehamandStPeters_115.setVisible(true);lyr_Onkaparinga_116.setVisible(true);lyr_Playford_117.setVisible(true);lyr_PortAdelaideEnfield_118.setVisible(true);lyr_Prospect_119.setVisible(true);lyr_Salisbury_120.setVisible(true);lyr_TeaTreeGully_121.setVisible(true);lyr_Unley_122.setVisible(true);lyr_VictorHarbor_123.setVisible(true);lyr_Walkerville_124.setVisible(true);lyr_WestTorrens_125.setVisible(true);lyr_Yankalilla_126.setVisible(true);
var layersList = [group_BaseLayer,group_OtherOverlays,group_NotetoDueDiligenceOverlay,group_NDHDeductedOverlays,group_Zoning,group_GarpVisionMapElements,group_Administrative];
lyr_UrbanTransportRoutes_2.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_FutureRoadWidening_3.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_FutureLocalRoadWidening_4.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_CharacterAreaOverlay_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AffordableHousing_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MajorUrbanTransportRoutes_7.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_UrbanTreeCanopy_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_TrafficGeneratingDevelopment_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_StormwaterManagement_10.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_StateSignificantNativeVegetation_11.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_SignificantLandscapeProtection_12.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_ScenicQuality_13.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_RiverMurrayTributariesProtectionArea_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_RiverMurrayFloodplainProtection_15.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_RegulatedandSignificantTree_16.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_RamsarWetlands_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_PrescribedWellsArea_18.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_PrescribedWatercourses_19.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_PrescribedWaterResourcesArea_20.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_PrescribedSurfaceWaterAreas_21.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NoiseandAirEmissions_22.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NativeVegetation_23.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MurrayDarlingBasin_24.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MountLoftyRangesCatchmentArea2_25.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MountLoftyRangesCatchmentArea1_26.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MarineParksRestrictedUse_27.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MarineParksManagedUse_28.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_LocalHeritagePlace_29.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_LimitedDwelling_30.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_KeyOutbackandRuralRoutes_31.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_InterfaceManagement_32.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HeritageAdjacency_33.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsBushfireMediumRisk_34.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsBushfireHighRisk_35.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsBushfireGeneralRisk_36.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_Gateway_37.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_EnvironmentandFoodProductionArea_38.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_DwellingExcision_39.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_Design_40.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_CharacterPreservationDistrict_41.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_BuildingNearAirfields_42.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AirportBuildingHeightsRegulated_43.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AirportBuildingHeightsAircraftLandingArea_44.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AircraftNoiseExposure_45.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AdvertisingNearSignalisedIntersections_46.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_SignificantInterfaceManagement_47.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_ResourceExtractionProtectionArea_48.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_LimitedLandDivision_49.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_CoastalFlooding_50.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_CoastalAreas_51.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AdelaideDolphinSanctuary_52.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_TunnelProtection_53.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NonstopCorridor_54.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_KeyRailwayCrossings_55.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_GasandLiquidPetroleumPipelines_56.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_GasandLiquidPetroleumPipelinesFacilities_57.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_DefenceAviationArea_58.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_StateHeritageArea_59.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_StateHeritagePlace_60.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HistoricAreaOverlay_61.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsFloodingHigh_62.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_WaterProtectionArea_63.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsAcidSulfateSoils_64.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'Id', 'name': 'Name', 'description': 'Description', 'value': 'Value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'Status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_ActivityZones_65.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_CapitalCityZones_66.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_EmploymentZones_67.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_InfrastructureZones_68.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_NaturalResourcesandEnvironmentZones_69.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_NeighbourhoodandCorridorZones_70.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_RuralZones_71.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_TourismZones_72.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_TownshipandSettlementZones_73.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'value': 'value', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', });
lyr_HillsFaceZone_74.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_EnvironmentandFoodProductionArea_75.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_CharacterPreservationDistrict_76.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_OpenSpaceNetworkGreenways2_77.set('fieldAliases', {'fid': 'fid', });
lyr_OpenSpaceNetworkGreenways_78.set('fieldAliases', {'fid': 'fid', });
lyr_OpenSpaceNetworkGreenSpace_79.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_InterUrbanBreaks_80.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NorthernParkLands_81.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureGreenfieldGrowthArea_82.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureGreenfieldSupplyinEFPA_83.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateInnovationPlaces_84.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PrimeIndustrialEmploymentPrecinct_85.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NationalEmploymentEconomicCluster_86.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantIndustrialEmploymentPrecinct_87.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_FutureEmployment_88.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_StateSignificantInfillAreas_89.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_LocalInfillInvestigationAreas_90.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_NorthernParkLandsGreenCorridorLink_91.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_TransportInvestigations_92.set('fieldAliases', {'id': 'id', });
lyr_ExistingRailwayCorridors_93.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_PotentialGreaterAdelaideFreightBypass_94.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_BusRoutesPublicTransport_95.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_ExistingMajorTransportRoutes_96.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Seaport_97.set('fieldAliases', {'id': 'id', });
lyr_AirportsandAirfields_98.set('fieldAliases', {'id': 'id', });
lyr_GARPLGA_99.set('fieldAliases', {'fid': 'fid', 'LGA_CODE24': 'LGA_CODE24', 'LGA_NAME24': 'LGA_NAME24', 'STE_CODE21': 'STE_CODE21', 'STE_NAME21': 'STE_NAME21', 'AUS_CODE21': 'AUS_CODE21', 'AUS_NAME21': 'AUS_NAME21', 'AREASQKM': 'AREASQKM', 'LOCI_URI21': 'LOCI_URI21', });
lyr_AdelaideHills_100.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_AdelaidePlains_101.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Adelaide_102.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Alexandrina_103.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Barossa_104.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Burnside_105.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_CampbelltownSA_106.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_CharlesSturt_107.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Gawler_108.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_HoldfastBay_109.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Light_110.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Marion_111.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Mitcham_112.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_MountBarker_113.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_MurrayBridge_114.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_NorwoodPaynehamandStPeters_115.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Onkaparinga_116.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Playford_117.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_PortAdelaideEnfield_118.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Prospect_119.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Salisbury_120.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_TeaTreeGully_121.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Unley_122.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_VictorHarbor_123.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Walkerville_124.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_WestTorrens_125.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_Yankalilla_126.set('fieldAliases', {'fid': 'fid', 'parcel_identifier': 'parcel_identifier', 'Address': 'Address', 'Zoning': 'Zoning', 'Gross HA': 'Gross HA', 'LGA_NAME24': 'LGA_NAME24', });
lyr_UrbanTransportRoutes_2.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_FutureRoadWidening_3.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_FutureLocalRoadWidening_4.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_CharacterAreaOverlay_5.set('fieldImages', {'fid': '', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_AffordableHousing_6.set('fieldImages', {'fid': '', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_MajorUrbanTransportRoutes_7.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_UrbanTreeCanopy_8.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_TrafficGeneratingDevelopment_9.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_StormwaterManagement_10.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_StateSignificantNativeVegetation_11.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_SignificantLandscapeProtection_12.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_ScenicQuality_13.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_RiverMurrayTributariesProtectionArea_14.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_RiverMurrayFloodplainProtection_15.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_RegulatedandSignificantTree_16.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_RamsarWetlands_17.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_PrescribedWellsArea_18.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_PrescribedWatercourses_19.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_PrescribedWaterResourcesArea_20.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_PrescribedSurfaceWaterAreas_21.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_NoiseandAirEmissions_22.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_NativeVegetation_23.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_MurrayDarlingBasin_24.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_MountLoftyRangesCatchmentArea2_25.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_MountLoftyRangesCatchmentArea1_26.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_MarineParksRestrictedUse_27.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_MarineParksManagedUse_28.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_LocalHeritagePlace_29.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_LimitedDwelling_30.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_KeyOutbackandRuralRoutes_31.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_InterfaceManagement_32.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HeritageAdjacency_33.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HazardsBushfireMediumRisk_34.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HazardsBushfireHighRisk_35.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HazardsBushfireGeneralRisk_36.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_Gateway_37.set('fieldImages', {'fid': '', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_EnvironmentandFoodProductionArea_38.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_DwellingExcision_39.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_Design_40.set('fieldImages', {'fid': '', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_CharacterPreservationDistrict_41.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_BuildingNearAirfields_42.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_AirportBuildingHeightsRegulated_43.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_AirportBuildingHeightsAircraftLandingArea_44.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_AircraftNoiseExposure_45.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_AdvertisingNearSignalisedIntersections_46.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_SignificantInterfaceManagement_47.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_ResourceExtractionProtectionArea_48.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_LimitedLandDivision_49.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_CoastalFlooding_50.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_CoastalAreas_51.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_AdelaideDolphinSanctuary_52.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_TunnelProtection_53.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_NonstopCorridor_54.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_KeyRailwayCrossings_55.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_GasandLiquidPetroleumPipelines_56.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_GasandLiquidPetroleumPipelinesFacilities_57.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_DefenceAviationArea_58.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_StateHeritageArea_59.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_StateHeritagePlace_60.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HistoricAreaOverlay_61.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HazardsFloodingHigh_62.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_WaterProtectionArea_63.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_HazardsAcidSulfateSoils_64.set('fieldImages', {'fid': '', 'objectid': '', 'id': '', 'name': '', 'description': '', 'value': '', 'legalstartdate': '', 'legalenddate': '', 'status': '', 'st_area(shape)': '', 'st_perimeter(shape)': '', 'systemstartdate': '', 'systemenddate': '', });
lyr_ActivityZones_65.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_CapitalCityZones_66.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_EmploymentZones_67.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_InfrastructureZones_68.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_NaturalResourcesandEnvironmentZones_69.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_NeighbourhoodandCorridorZones_70.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_RuralZones_71.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_TourismZones_72.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_TownshipandSettlementZones_73.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'value': 'TextEdit', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', });
lyr_HillsFaceZone_74.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_EnvironmentandFoodProductionArea_75.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_CharacterPreservationDistrict_76.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_OpenSpaceNetworkGreenways2_77.set('fieldImages', {'fid': '', });
lyr_OpenSpaceNetworkGreenways_78.set('fieldImages', {'fid': '', });
lyr_OpenSpaceNetworkGreenSpace_79.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_InterUrbanBreaks_80.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NorthernParkLands_81.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureGreenfieldGrowthArea_82.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureGreenfieldSupplyinEFPA_83.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateInnovationPlaces_84.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_PrimeIndustrialEmploymentPrecinct_85.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NationalEmploymentEconomicCluster_86.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantIndustrialEmploymentPrecinct_87.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_FutureEmployment_88.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_StateSignificantInfillAreas_89.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_LocalInfillInvestigationAreas_90.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_NorthernParkLandsGreenCorridorLink_91.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_TransportInvestigations_92.set('fieldImages', {'id': 'TextEdit', });
lyr_ExistingRailwayCorridors_93.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_PotentialGreaterAdelaideFreightBypass_94.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_BusRoutesPublicTransport_95.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_ExistingMajorTransportRoutes_96.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Seaport_97.set('fieldImages', {'id': '', });
lyr_AirportsandAirfields_98.set('fieldImages', {'id': '', });
lyr_GARPLGA_99.set('fieldImages', {'fid': 'TextEdit', 'LGA_CODE24': 'TextEdit', 'LGA_NAME24': 'TextEdit', 'STE_CODE21': 'TextEdit', 'STE_NAME21': 'TextEdit', 'AUS_CODE21': 'TextEdit', 'AUS_NAME21': 'TextEdit', 'AREASQKM': 'TextEdit', 'LOCI_URI21': 'TextEdit', });
lyr_AdelaideHills_100.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_AdelaidePlains_101.set('fieldImages', {'fid': 'TextEdit', 'parcel_identifier': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Gross HA': 'TextEdit', 'LGA_NAME24': 'TextEdit', });
lyr_Adelaide_102.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Alexandrina_103.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Barossa_104.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Burnside_105.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_CampbelltownSA_106.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_CharlesSturt_107.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Gawler_108.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_HoldfastBay_109.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Light_110.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Marion_111.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Mitcham_112.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_MountBarker_113.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_MurrayBridge_114.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_NorwoodPaynehamandStPeters_115.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Onkaparinga_116.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Playford_117.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_PortAdelaideEnfield_118.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Prospect_119.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Salisbury_120.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_TeaTreeGully_121.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Unley_122.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_VictorHarbor_123.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Walkerville_124.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_WestTorrens_125.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_Yankalilla_126.set('fieldImages', {'fid': '', 'parcel_identifier': '', 'Address': '', 'Zoning': '', 'Gross HA': '', 'LGA_NAME24': '', });
lyr_UrbanTransportRoutes_2.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_FutureRoadWidening_3.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_FutureLocalRoadWidening_4.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_CharacterAreaOverlay_5.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AffordableHousing_6.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MajorUrbanTransportRoutes_7.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_UrbanTreeCanopy_8.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_TrafficGeneratingDevelopment_9.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_StormwaterManagement_10.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_StateSignificantNativeVegetation_11.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_SignificantLandscapeProtection_12.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_ScenicQuality_13.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_RiverMurrayTributariesProtectionArea_14.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_RiverMurrayFloodplainProtection_15.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_RegulatedandSignificantTree_16.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_RamsarWetlands_17.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_PrescribedWellsArea_18.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_PrescribedWatercourses_19.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_PrescribedWaterResourcesArea_20.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_PrescribedSurfaceWaterAreas_21.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NoiseandAirEmissions_22.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NativeVegetation_23.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MurrayDarlingBasin_24.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MountLoftyRangesCatchmentArea2_25.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MountLoftyRangesCatchmentArea1_26.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MarineParksRestrictedUse_27.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MarineParksManagedUse_28.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_LocalHeritagePlace_29.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_LimitedDwelling_30.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_KeyOutbackandRuralRoutes_31.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_InterfaceManagement_32.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HeritageAdjacency_33.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsBushfireMediumRisk_34.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsBushfireHighRisk_35.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsBushfireGeneralRisk_36.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_Gateway_37.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_EnvironmentandFoodProductionArea_38.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_DwellingExcision_39.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_Design_40.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_CharacterPreservationDistrict_41.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_BuildingNearAirfields_42.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AirportBuildingHeightsRegulated_43.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AirportBuildingHeightsAircraftLandingArea_44.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AircraftNoiseExposure_45.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AdvertisingNearSignalisedIntersections_46.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_SignificantInterfaceManagement_47.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_ResourceExtractionProtectionArea_48.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_LimitedLandDivision_49.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_CoastalFlooding_50.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_CoastalAreas_51.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AdelaideDolphinSanctuary_52.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_TunnelProtection_53.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NonstopCorridor_54.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_KeyRailwayCrossings_55.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_GasandLiquidPetroleumPipelines_56.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_GasandLiquidPetroleumPipelinesFacilities_57.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_DefenceAviationArea_58.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_StateHeritageArea_59.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_StateHeritagePlace_60.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HistoricAreaOverlay_61.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsFloodingHigh_62.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_WaterProtectionArea_63.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsAcidSulfateSoils_64.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_ActivityZones_65.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_CapitalCityZones_66.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_EmploymentZones_67.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_InfrastructureZones_68.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_NaturalResourcesandEnvironmentZones_69.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_NeighbourhoodandCorridorZones_70.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_RuralZones_71.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_TourismZones_72.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_TownshipandSettlementZones_73.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'value': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', });
lyr_HillsFaceZone_74.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_EnvironmentandFoodProductionArea_75.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_CharacterPreservationDistrict_76.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_OpenSpaceNetworkGreenways2_77.set('fieldLabels', {'fid': 'no label', });
lyr_OpenSpaceNetworkGreenways_78.set('fieldLabels', {'fid': 'no label', });
lyr_OpenSpaceNetworkGreenSpace_79.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_InterUrbanBreaks_80.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_NorthernParkLands_81.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureGreenfieldGrowthArea_82.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureGreenfieldSupplyinEFPA_83.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateInnovationPlaces_84.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_PrimeIndustrialEmploymentPrecinct_85.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_NationalEmploymentEconomicCluster_86.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateSignificantIndustrialEmploymentPrecinct_87.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_FutureEmployment_88.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_StateSignificantInfillAreas_89.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_LocalInfillInvestigationAreas_90.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_NorthernParkLandsGreenCorridorLink_91.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_TransportInvestigations_92.set('fieldLabels', {'id': 'hidden field', });
lyr_ExistingRailwayCorridors_93.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_PotentialGreaterAdelaideFreightBypass_94.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_BusRoutesPublicTransport_95.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_ExistingMajorTransportRoutes_96.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', });
lyr_Seaport_97.set('fieldLabels', {'id': 'hidden field', });
lyr_AirportsandAirfields_98.set('fieldLabels', {'id': 'hidden field', });
lyr_GARPLGA_99.set('fieldLabels', {'fid': 'hidden field', 'LGA_CODE24': 'hidden field', 'LGA_NAME24': 'hidden field', 'STE_CODE21': 'hidden field', 'STE_NAME21': 'hidden field', 'AUS_CODE21': 'hidden field', 'AUS_NAME21': 'hidden field', 'AREASQKM': 'hidden field', 'LOCI_URI21': 'hidden field', });
lyr_AdelaideHills_100.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_AdelaidePlains_101.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Adelaide_102.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Alexandrina_103.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Barossa_104.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Burnside_105.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_CampbelltownSA_106.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_CharlesSturt_107.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Gawler_108.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_HoldfastBay_109.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Light_110.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Marion_111.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Mitcham_112.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_MountBarker_113.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_MurrayBridge_114.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_NorwoodPaynehamandStPeters_115.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Onkaparinga_116.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Playford_117.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_PortAdelaideEnfield_118.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Prospect_119.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Salisbury_120.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_TeaTreeGully_121.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Unley_122.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_VictorHarbor_123.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Walkerville_124.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_WestTorrens_125.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Yankalilla_126.set('fieldLabels', {'fid': 'hidden field', 'parcel_identifier': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gross HA': 'inline label - visible with data', 'LGA_NAME24': 'inline label - visible with data', });
lyr_Yankalilla_126.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});