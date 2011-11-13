jQuery(function($) {
    $('body').prepend('<div class="ui-widget-editor-dock-spacer" />');
});
(function($) {
    $.ui.editor.addButton('dock', {
        name: 'dock',
        title: 'Click to dock the toolbar',
        icons: {
            primary: 'ui-icon-pin-s'
        },
        click: function(event, button) {
            this._editor.toolbar.parent().toggleClass('ui-widget-editor-docked');
            this._editor.toolbar.toggleClass('ui-dialog-content').find('.ui-widget-editor-inner').toggleClass('ui-widget-header');
            $('.ui-widget-editor-dock-spacer').height(this._editor.toolbar.outerHeight()).toggle();
            
            if ($(button).hasClass('ui-icon-pin-w')) {  // Dock
                $(button).find('span.ui-button-icon-primary')
                        .removeClass('ui-icon-pin-s').addClass('ui-icon-pin-w');
                if (this.options.custom_tooltips) {
                    $(button).tipTip({
                        content: 'Click to detach the toolbar'
                    });
                }
            } else {    // Detach
                $(button).find('span.ui-button-icon-primary')
                    .removeClass('ui-icon-pin-w').addClass('ui-icon-pin-s');
                if (this.options.custom_tooltips) {
                    $(button).tipTip({
                        content: 'Click to dock the toolbar'
                    });
                }
            }
        
        }
    });
})(jQuery);
