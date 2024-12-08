JEIEvents.hideItems((event) => {
    Ingredient.all.stacks.forEach((stack) => {
        if (stack.mod == "projecte") {
            event.hide(stack);
        }
    });
});
