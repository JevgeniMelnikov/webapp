Ext.onReady(function(){
        var store = Ext.create('Ext.data.ArrayStore', {
        fields: ['id','ip','comment'],
        data: adrs
        
        });

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false
    });

      var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [{
            text: 'ID',
            dataIndex: 'id'
        }, {
            text: 'IP',
            dataIndex: 'ip'
        }, {
            text: 'Comment',
            dataIndex: 'comment',
	    editor: {
		xtype:'textfield',
            	allowBlank: true
            }
        }],
        title: 'Addresses',
        height: 200,
        width: 350,
	frame: true,
	plugins: [rowEditing],
        renderTo: 'ipGrid'

        });

grid.on('edit', function(editor, e) {
var cmnt = e.record.data[e.field];
Ext.Ajax.request({
    method: 'POST',
    headers: {'Content-Type': 'text/html'},
    url: 'http://localhost/webapp/index.php',
    params  : {
       comment: cmnt
    },
    success: function() {
	alert('ok');
    },
    failure: function() {
	alert('Не получилось сделать эту штуку =( ');
    }
});
});
    Ext.create('Ext.Button', {
        text: 'Refresh',
	margin: '10 10 10 0',
        renderTo: "btn",
        listeners: {
            click : function() {
		window.location.reload();
            }
        }
    });
});
