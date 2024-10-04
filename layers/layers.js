ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15356080.568607, -4218206.319828, 15579207.413051, -4102462.872743]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_GARP_VisionMap_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "GARP_Vision Map_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GARP_VisionMap_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15369201.722379, -4265082.902795, 15554188.052730, -4044619.194061]
                            })
                        });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_GARP_VisionMap_modified_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_GARP_VisionMap_modified_1];
