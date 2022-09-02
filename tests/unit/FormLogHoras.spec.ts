import { mount } from "@vue/test-utils";
import FormLogHoras from "@/components/FormLogHoras.vue";

describe("FormLogHoras.vue", () => {
  it("Componente criado ", () => {
    const wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: "",
        index: "",
      },
    });

    expect(wrapper.vm).toBeDefined();
  });

  it("testando o valida => true ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const inpTitulo = wrapper.find("[test-id=forme-titulo]");
    const inpNome = wrapper.find("[test-id=forme-nome]");
    const inpTempo = wrapper.find("[test-id=forme-tempo]");
    const inpDescricao = wrapper.find("[test-id=forme-descricao]");
    inpTitulo.setValue("TESTE true");
    inpNome.setValue("lucas");
    inpTempo.setValue(30);
    inpDescricao.setValue("testando o metodo valida");
    expect(wrapper.vm.valida()).toBe(true);
  });

  it("testando o valida => false ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const inpTitulo = wrapper.find("[test-id=forme-titulo]");
    const inpNome = wrapper.find("[test-id=forme-nome]");
    const inpTempo = wrapper.find("[test-id=forme-tempo]");
    const inpDescricao = wrapper.find("[test-id=forme-descricao]");
    inpTitulo.setValue("TESTE true");
    inpNome.setValue("");
    inpTempo.setValue(null);
    inpDescricao.setValue("testando o metodo valida");

    expect(wrapper.vm.valida()).toBe(false);
  });

  it("testando que o tempo é um number => true ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const inpTempo = wrapper.find("[test-id=forme-tempo]");

    inpTempo.setValue(30);
    wrapper.trigger("submit");
    expect(parseInt(wrapper.vm.tempo)).toBe(30);
  });

  it("testando que o tempo é um number => false ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const inpTempo = wrapper.find("[test-id=forme-tempo]");

    inpTempo.setValue("30");
    wrapper.trigger("submit");
    expect(wrapper.vm.tempo).toBeFalsy;
  });

  it("testando o submit => true ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const inpTitulo = wrapper.find("[test-id=forme-titulo]");
    const inpNome = wrapper.find("[test-id=forme-nome]");
    const inpTempo = wrapper.find("[test-id=forme-tempo]");
    const inpDescricao = wrapper.find("[test-id=forme-descricao]");
    inpTitulo.setValue("TESTE true");
    inpNome.setValue("lucas");
    inpTempo.setValue(30);
    inpDescricao.setValue("testando o metodo valida");
    wrapper.vm.grava();

    wrapper.trigger("submit");
    const emitido = wrapper.emitted("forme");
    const formu = emitido ? emitido[0][0] : null;
    expect(formu[1]).toHaveLength(4);
  });

  it("testando alerta de campos não preenchidos  => true ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const mensagem = wrapper.find(
      "[test-id=forme-alerta-campos-nao-preenchidos]"
    );

    wrapper.vm.grava();
    wrapper.trigger("submit");
    expect(wrapper.vm.visivel).toBe(true);
    expect(mensagem).toBeDefined;
  });

  it("testando alerta de campos não preenchidos  => false ", async () => {
    let wrapper = mount(FormLogHoras, {
      propsData: {
        formulario: ["", "", "", ""],
        index: 0,
      },
    });
    const mensagem = wrapper.find(
      "[test-id=forme-alerta-campos-nao-preenchidos]"
    );

    const inpTitulo = wrapper.find("[test-id=forme-titulo]");
    const inpNome = wrapper.find("[test-id=forme-nome]");
    const inpTempo = wrapper.find("[test-id=forme-tempo]");
    const inpDescricao = wrapper.find("[test-id=forme-descricao]");
    inpTitulo.setValue("TESTE true");
    inpNome.setValue("lucas");
    inpTempo.setValue(30);
    inpDescricao.setValue("testando o metodo valida");

    wrapper.vm.grava();
    wrapper.trigger("submit");
    expect(wrapper.vm.visivel).toBe(false);
    expect(mensagem).toBeUndefined;
  });
});
