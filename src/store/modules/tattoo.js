const state = () => ({
  step: 0,
  tattoCurrentCat: null,
  categories: [
    {
      id: 0,
      title: "Татуировка",
      name: "На спину",
      elements: [
        {
          id: 0,
          name: "Не Морской череп",
          price: 5000
        },
        {
          id: 1,
          name: "Морской череп1",
          price: 5000
        },
        {
          id: 3,
          name: "Морской череп2",
          price: 5000
        }
      ]
    },
    {
      id: 1,
      title: "Татуировка",
      name: "На грудь",
      elements: [
        {
          id: 4,
          name: "Морской череп3",
          price: 5000
        },
        {
          id: 5,
          name: "Морской череп4",
          price: 5000
        },
        {
          id: 6,
          name: "Морской череп5",
          price: 5000
        }
      ]
    },
    {
      id: 2,
      title: "Татуировка",
      name: "На живот",
      elements: [
        {
          id: 6,
          name: "Lorem ipsum2",
          price: 59000
        },
        {
          id: 7,
          name: "Lorem ipsum3",
          price: 12000
        },
        {
          id: 8,
          name: "Морской череп6",
          price: 7000
        }
      ]
    }
  ]
});

const getters = {
  tattooCategories: (state) => state.categories,
  tattooStep: (state) => state.step,
  currentCat: (state) => state.tattoCurrentCat || []
};

const actions = {
  changeStep({ commit }, data) {
    commit("CHANGE_STEP", data);
  }
};

const mutations = {
  CHANGE_STEP(state, data) {
    state.step = data.step;
    if (data.step === 0) {
      state.tattoCurrentCat = null;
      return;
    }
    state.tattoCurrentCat = state.categories[data.id].elements;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
