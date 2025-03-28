var size = 0;
var placement = 'point';
function categories_AircraftNoiseExposure_45(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ANEF 20':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(230,255,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ANEF 25':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(180,242,250,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ANEF 30':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(132,219,245,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ANEF 35':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(86,186,240,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ANEF 40':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(42,145,235,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Area is subject to aircraft noise':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,110,110,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(0,92,230,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AircraftNoiseExposure_45 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("value");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_AircraftNoiseExposure_45(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
