const menu = () => {
    
    const menuContent = document.createElement('div');
    const drinks = [{'item':'tea', 'price': '$3'}, {'item':'coffee', 'price': '$3'}, {'item':'latte', 'price':'$4'}, {'item':'hot chocolate', 'price':'$4'},{'item':'Italian Soda', 'price':'$4'}, {'item':'juice', 'price':'$2.50'}];
    const food = [{'item':'half waffle', 'price': '$4'}, {'item':'full waffle', 'price': '$7'}, {'item':'breakfast sandwich', 'price':'$5.50'}, {'item':'soup', 'price':'$5.50'},{'item':'beet salad', 'price':'$10'}, {'item':'chicken pesto on waffle', 'price': '$15.50'}];
    menuContent.textContent = "drinks:";
    const drinkList = document.createElement('ul');

    for (let drink of drinks){
        let listItem = document.createElement('li');
        let spacer = document.createElement('span');
        let str = '';
        while (str.length < 30 - drink.item.length){
            str += ' .';
        }
        spacer.textContent = str;
        listItem.insertAdjacentText("afterbegin", `${drink.item}`);
        listItem.insertAdjacentElement("beforeend", spacer);
        
        listItem.insertAdjacentText("beforeend", ` ${drink.price}`);
        drinkList.appendChild(listItem);
    }
    menuContent.appendChild(drinkList);
    menuContent.insertAdjacentText('beforeend', 'Food:');

    const foodList = document.createElement('ul');

    for (let foodItem of food){
        let listItem = document.createElement('li');
        let spacer = document.createElement('span');
        let str = '';
        while (str.length < 30 - foodItem.item.length){
            str += ' .';
        }
        spacer.textContent = str;
        listItem.insertAdjacentText("afterbegin", `${foodItem.item}`);
        listItem.insertAdjacentElement("beforeend", spacer);
        
        listItem.insertAdjacentText("beforeend", ` ${foodItem.price}`);
        foodList.appendChild(listItem);
    }
    menuContent.appendChild(foodList);

    return menuContent;
}

export { menu };