var panels = ["monzo_streak", "pokken_matchup_recorder", "portfolio"];
var panelsNiceText = ["Monzo Streak", "Pokken Matchup Recorder", "Portfolio"]; // TODO: Automate

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
  document.getElementById("current-proj-label").innerHTML = panelsNiceText[index];
}

function getPanelDiv(panelName)
{
  return document.getElementById("dev-" + panelName);
}

function changeToPanel(panelName)
{
  hidePanel(current_panel);
  current_panel = panels.indexOf(panelName);
  showPanel(current_panel);
}
