document.getElementById('viewButton').onclick = function() {
    document.getElementById('productModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('productModal')) {
        document.getElementById('productModal').style.display = 'none';
    }
}