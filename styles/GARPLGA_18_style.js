var size = 0;
var placement = 'point';

var style_GARPLGA_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.4px \'Open Sans SemiBold\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("LGA_NAME24") !== null && resolution > 0 && resolution < 280) {
        labelText = String(feature.get("LGA_NAME24"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,4,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
