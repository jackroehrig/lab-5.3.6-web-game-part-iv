function newItem(url){
    let item = newImage(url)
    item.style.zIndex = 10;
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}