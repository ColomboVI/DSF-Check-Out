function validarEmail(ws){
   var sheet_workshops=SpreadsheetApp.getActive().getSheetByName('Workshops');
   var emailProfe = sheet_workshops.getRange('emailProfe' + ws).getValue();
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(emailProfe)){
    var ui = SpreadsheetApp.getUi();
    var response = ui.prompt('Necesitamos email profesor de ' + ws, 'Indique un correo electrónico para continuar', ui.ButtonSet.YES_NO);  
   // Process the user's response.
   if (response.getSelectedButton() == ui.Button.YES) {
       if(response.getResponseText() == ""){
           sheet_workshops.getRange('emailProfe' +ws)
           .setValue("Falta email aqui").setBackground("red").setFontColor("white");
           return
       }else{
        var emailDado = response.getResponseText() 
            sheet_workshops.getRange('emailProfe' + ws)
           .setValue(emailDado)
           return
        }
  } else if (response.getSelectedButton() == ui.Button.NO) {
        sheet_workshops.getRange('emailProfe' + ws)
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  } else {
        sheet_workshops.getRange('emailProfe' + ws)
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  }
    
    }    
  //  else { generarFormularioWorkshop(ws); }
}

