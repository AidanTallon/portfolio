var panels = ["cucumber_with", "pokken_matchup_recorder_acceptance_testing", "portfolio_ui_test"];
var panelsNiceText = ["Cucumber-With", "Pokken Matchup Recorder Acceptance Testing", "Portfolio UI Test"];

var current_panel = 0;

function clickLeftButton()
{
  if (current_panel != 0)
  {
    hidePanel(current_panel);
    current_panel--;
    showPanel(current_panel);
  }
}

function clickRightButton()
{
  if (current_panel != panels.length - 1)
  {
    hidePanel(current_panel);
    current_panel++;
    showPanel(current_panel);
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
  return document.getElementById("test-" + panelName);
}

function changeToPanel(panelName)
{
  hidePanel(current_panel);
  current_panel = panels.indexOf(panelName);
  showPanel(current_panel);
}
