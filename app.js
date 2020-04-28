// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(typ, des, val) {
            var newItem;

            // Create new ID
            if (data.allItems[typ].length > 0) {
                ID = data.allItems[typ][data.allItems[typ].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Create newItem based on 'inc' or 'exp' type
            if (typ === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (typ === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push newItem into our data
            data.allItems[typ].push(newItem);

            // Return newItem
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    }

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDomStrings: function() {
            return DOMstrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOMlinks = UICtrl.getDomStrings();

        // Handling click event
        document.querySelector(DOMlinks.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the filled input data
        input = UICtrl.getinput();

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to UI


        // 4. Calculate the budget


        // 5. Display the budget on the UI

    };

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);


controller.init();




