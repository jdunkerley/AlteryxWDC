Alteryx.Gui.BeforeLoad = (manager, dataItems) => {
  if (!manager.GetDataItemByDataName('URL')) {
    manager.AddDataItem(new dataItems.SimpleString({ dataname: 'URL', id: 'URL', initialValue: 'HelloFromJS' }))
  }

  const rootElement = document.getElementById('root') || new HTMLDivElement()
  rootElement.innerHTML = 'Help Me Obi Wan'
}
