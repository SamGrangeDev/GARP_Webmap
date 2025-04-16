map.on('singleclick', function (evt) {
    var coordinate = evt.coordinate;
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat) {
        return feat;
    });

    if (feature) {
        // Populate popup content
        const popupContent = `
            <div class="popup">
                <div class="header">${feature.get('Estate')}</div>
                <p><strong>Total No. of Lots:</strong> ${feature.get(' Total Lots')}</p>
                <p><strong>Developer:</strong> ${feature.get(' Developer')}</p>
                <p><strong>Percentage of Development:</strong> ${feature.get(' Percent Development')}</p>
                <table>
                    <tr>
                        <th>Avg Lot Size</th>
                        <th>Avg Lot Price</th>
                        <th>NSA Rate</th>
                        <th>Price Premium ($)</th>
                        <th>Price Premium (%)</th>
                    </tr>
                    <tr>
                        <td>${feature.get(' Lot Size 1')}</td>
                        <td>${feature.get(' Lot Price 1')}</td>
                        <td>${feature.get(' NSA Rate 1')}</td>
                        <td>${feature.get(' Price Premium 1')}</td>
                        <td>${feature.get(' Price Percent 1')}</td>
                    </tr>
                    <tr>
                        <td>${feature.get(' Lot Size 2')}</td>
                        <td>${feature.get(' Lot Price 2')}</td>
                        <td>${feature.get(' NSA Rate 2')}</td>
                        <td>${feature.get(' Price Premium 2')}</td>
                        <td>${feature.get(' Price Percent 2')}</td>
                    </tr>
                    <tr>
                        <td>${feature.get(' Lot Size 3')}</td>
                        <td>${feature.get(' Lot Price 3')}</td>
                        <td>${feature.get(' NSA Rate 3')}</td>
                        <td>${feature.get(' Price Premium 3')}</td>
                        <td>${feature.get(' Price Percent 3')}</td>
                    </tr>
                </table>
            </div>
        `;
        document.getElementById('popup-content').innerHTML = popupContent;

        // Display popup
        popup.setPosition(coordinate);
    } else {
        popup.setPosition(undefined);
    }
});
