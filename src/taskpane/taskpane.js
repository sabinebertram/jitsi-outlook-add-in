/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";
const helpers = require('../helpers/helpers')

/* global document, Office */

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

function printError(elementId, error) {
  document.getElementById(elementId).innerText = error
}

export async function run() {
  /**
   * Insert your Outlook code here
   */
  const callname = document.getElementById('callname').value
  if (callname === '') {
    printError("nameErr", "Please enter a call name");
  } else {
    const id = helpers.generateId(10)
    const content = helpers.generateHTMLContent(id, callname)
    Office.context.mailbox.item.body.setSelectedDataAsync(content,
      {coercionType: Office.CoercionType.Html}, function(result) {
        if (result.status === Office.AsyncResultStatus.Failed) {
          showError('Could not insert call link: ' + result.error.message);
        } else {
          document.getElementById('callname').value = ''
          Office.context.ui.closeContainer()
        }
    });
  }
}
