var panels = ["monzostreak", "pokkenmatchuprecorder", "portfolio"];

var current_panel = 0;

function clickLeftButton()
{
  if (current_panel != 0)
  {
    hidePanel(current_panel)
    current_panel--;
    showPanel(current_panel)
  }
}

function clickRightButton()
{
  if (current_panel != panels.length - 1)
  {
    hidePanel(current_panel)
    current_panel++;
    showPanel(current_panel)
  }
}

function hidePanel(index)
{
  getPanelDiv(panels[index]).style.display = "none";
}

function showPanel(index)
{
  getPanelDiv(panels[index]).style.display = "block";
}

function getPanelDiv(panelName)
{
  return document.getElementById("dev-" + panelName);
}
