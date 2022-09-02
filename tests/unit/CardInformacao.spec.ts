import { mount } from "@vue/test-utils";
import CardInformacao from "@/components/CardInformacao.vue";

describe("CardInformacao.vue", () => {
  it("Componente criado ", () => {
    const wrapper = mount(CardInformacao);

    expect(wrapper.vm).toBeDefined();
  });

  it("exibe as informações do card ", () => {
    const forme = ["TESTE true", "lucas", 30, "testando o metodo valida"];
    const wrapper = mount(CardInformacao, {
      propsData: {
        formulario: forme,
      },
    });

    const card = wrapper.find("[test-id=card-informacao-label]").element;
    expect(card.textContent).toContain(
      `Titulo :  ${forme[0]} Nome :  ${forme[1]} Tempo Gasto em minutos : ${forme[2]} Descrição : ${forme[3]}`
    );
  });

  it("Testando o metodo apaga ", () => {
    const wrapper = mount(CardInformacao, {
      propsData: {
        index: 0,
      },
    });
    wrapper.vm.apaga();

    wrapper.trigger("submit");
    const emitido = wrapper.emitted("apagar");
    const emi = emitido ? emitido[0][0] : null;
    expect(emi).toBe(0);
  });
  it("Testando o metodo edita ", () => {
    const wrapper = mount(CardInformacao);
    wrapper.vm.edita();

    wrapper.trigger("submit");
    const emitido = wrapper.emitted("editar");
    const emi = emitido ? emitido[0][0] : null;
    expect(emi).toBe(true);
  });
});
