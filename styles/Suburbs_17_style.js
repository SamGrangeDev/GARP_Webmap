var size = 0;
var placement = 'point';

var style_Suburbs_17 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fa0004";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("suburb") !== null && resolution > 0 && resolution < 7) {
        labelText = String(feature.get("suburb"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(245,245,245,1.0)', lineDash: [11.399999999999999,2.28,4.56,2.28,4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),fill: new ol.style.Fill({color: 'rgba(0,0,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
