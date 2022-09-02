import { mount } from "@vue/test-utils";
import Painel from "@/components/Painel.vue";

describe("Painel.vue", () => {
  it("Componente criado ", () => {
    const wrapper = mount(Painel);

    expect(wrapper.vm).toBeDefined();
  });

  it("exibe o titulo ==> True", () => {
    const titu = "Teste Titulo";
    const wrapper = mount(Painel, {
      propsData: {
        titulo: titu,
      },
    });

    const titulo = wrapper.find("[test-id=painel-titulo]").element;
    expect(titulo.textContent).toContain(titu);
  });

  it("exibe o titulo ==> False", () => {
    const wrapper = mount(Painel);

    const titulo = wrapper.find("[test-id=painel-titulo]").element;
    expect(titulo.textContent).toContain("");
  });
});
