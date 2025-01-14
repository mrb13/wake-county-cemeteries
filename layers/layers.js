var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Townships_1 = new ol.format.GeoJSON();
var features_Townships_1 = format_Townships_1.readFeatures(json_Townships_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Townships_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Townships_1.addFeatures(features_Townships_1);
var lyr_Townships_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Townships_1, 
                style: style_Townships_1,
                popuplayertitle: "Townships",
                interactive: true,
                title: '<img src="styles/legend/Townships_1.png" /> Townships'
            });
var format_wakecemeteries1_2 = new ol.format.GeoJSON();
var features_wakecemeteries1_2 = format_wakecemeteries1_2.readFeatures(json_wakecemeteries1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wakecemeteries1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wakecemeteries1_2.addFeatures(features_wakecemeteries1_2);
var lyr_wakecemeteries1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wakecemeteries1_2, 
                style: style_wakecemeteries1_2,
                popuplayertitle: "Cemeteries",
                interactive: true,
                title: '<img src="styles/legend/wakecemeteries1_2.png" /> Cemeteries'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Townships_1.setVisible(true);lyr_wakecemeteries1_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Townships_1,lyr_wakecemeteries1_2];
lyr_Townships_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FTR_CODE': 'FTR_CODE', 'TOWNSHIP': 'TOWNSHIP', 'NAME': 'NAME', });
lyr_wakecemeteries1_2.set('fieldAliases', {'Cemetery#': 'Cemetery#', 'Cemetery Name': 'Cemetery Name', 'Township': 'Township', 'Notes': 'Notes', 'Original Directions': 'Original Directions', 'GPS': 'GPS', 'Find a Grave': 'Find a Grave', 'Cemetery Census': 'Cemetery Census', 'Other': 'Other', 'Township#': 'Township#', 'new index url': 'new index url', 'latitude': 'latitude', 'longitude': 'longitude', 'field_14': 'field_14', });
lyr_Townships_1.set('fieldImages', {'OBJECTID': 'Range', 'FTR_CODE': 'Range', 'TOWNSHIP': 'Range', 'NAME': 'TextEdit', });
lyr_wakecemeteries1_2.set('fieldImages', {'Cemetery#': 'TextEdit', 'Cemetery Name': 'TextEdit', 'Township': 'TextEdit', 'Notes': 'TextEdit', 'Original Directions': 'TextEdit', 'GPS': 'TextEdit', 'Find a Grave': 'TextEdit', 'Cemetery Census': 'TextEdit', 'Other': 'TextEdit', 'Township#': 'TextEdit', 'new index url': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'field_14': 'TextEdit', });
lyr_Townships_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FTR_CODE': 'hidden field', 'TOWNSHIP': 'hidden field', 'NAME': 'inline label - always visible', });
lyr_wakecemeteries1_2.set('fieldLabels', {'Cemetery#': 'hidden field', 'Cemetery Name': 'header label - visible with data', 'Township': 'header label - visible with data', 'Notes': 'inline label - visible with data', 'Original Directions': 'inline label - visible with data', 'GPS': 'hidden field', 'Find a Grave': 'inline label - visible with data', 'Cemetery Census': 'hidden field', 'Other': 'hidden field', 'Township#': 'hidden field', 'new index url': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'field_14': 'no label', });
lyr_wakecemeteries1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});