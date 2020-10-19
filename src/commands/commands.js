/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

const helpers = require('../helpers/helpers')
/* global global, Office, self, window */
Office.onReady(() => {
  // If needed, Office.js is ready to be called
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function insertRandomCallLink(event) {
  const id = helpers.generateId(10)
  const callname = helpers.generateId(16)
  const content = helpers.generateHTMLContent(id, callname)
  Office.context.mailbox.item.body.setSelectedDataAsync(content,
    {coercionType: Office.CoercionType.Html}, function(result) {
      if (result.status === Office.AsyncResultStatus.Failed) {
        showError('Could not insert call link: ' + result.error.message);
      }
      event.completed();
  });
}

function getGlobal() {
  return typeof self !== "undefined"
    ? self
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : undefined;
}

const g = getGlobal();

// the add-in command functions need to be available in global scope
g.insertRandomCallLink = insertRandomCallLink;
