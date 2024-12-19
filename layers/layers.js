ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-957723.950617, 3622437.241865, -835477.102121, 3709658.787857]);
var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Mosques_2 = new ol.format.GeoJSON();
var features_Mosques_2 = format_Mosques_2.readFeatures(json_Mosques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosques_2.addFeatures(features_Mosques_2);
var lyr_Mosques_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosques_2, 
                style: style_Mosques_2,
                popuplayertitle: 'Mosquées',
                interactive: true,
    title: 'Mosquées<br />\
    <img src="styles/legend/Mosques_2_0.png" /> Reconstruction partielle<br />\
    <img src="styles/legend/Mosques_2_1.png" /> Reconstruction totale<br />\
    <img src="styles/legend/Mosques_2_2.png" /> Réhabilitation<br />\
    <img src="styles/legend/Mosques_2_3.png" /> Typologie indéterminée<br />'
        });

lyr_googlesatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Mosques_2.setVisible(true);
var layersList = [lyr_googlesatellite_0,lyr_OpenStreetMap_1,lyr_Mosques_2];
lyr_Mosques_2.set('fieldAliases', {'Nom': 'Nom', 'Architecte': 'Architecte', 'Province': 'Province', 'Commune': 'Commune', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Code': 'Code', 'N° Ordre': 'N° Ordre', 'Superficie': 'Superficie', 'RapportLPE': 'RapportLPE', 'Typologie': 'Typologie', 'Typologi_1': 'Typologi_1', });
lyr_Mosques_2.set('fieldImages', {'Nom': 'TextEdit', 'Architecte': 'TextEdit', 'Province': 'TextEdit', 'Commune': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Code': 'TextEdit', 'N° Ordre': 'TextEdit', 'Superficie': 'TextEdit', 'RapportLPE': 'TextEdit', 'Typologie': 'TextEdit', 'Typologi_1': 'TextEdit', });
lyr_Mosques_2.set('fieldLabels', {'Nom': 'inline label - always visible', 'Architecte': 'inline label - always visible', 'Province': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Code': 'inline label - always visible', 'N° Ordre': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'RapportLPE': 'inline label - always visible', 'Typologie': 'inline label - always visible', 'Typologi_1': 'inline label - always visible', });
lyr_Mosques_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});