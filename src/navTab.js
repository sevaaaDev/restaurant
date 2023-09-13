const addUnderline = (currentTab) => {
  currentTab.classList.add('underline')
}

const removeUnderline = (allBtn) => {
  for (let btn of allBtn) {
    btn.classList.remove('underline')
  }
}

export default function setUnderline(currentTab, ...allBtn) {
  removeUnderline(allBtn)
  addUnderline(currentTab)
}