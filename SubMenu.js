({
	toggleVisibility : function(component, event, helper)
    {
    var ddDiv = component.find('ddId');
    $A.util.toggleClass(ddDiv,'slds-hide');
    },
    
    toggleSubMenu : function(component, event, helper)
    {
    var ddDiv = component.find('smId');
    $A.util.toggleClass(ddDiv,'slds-hide');
    }
})