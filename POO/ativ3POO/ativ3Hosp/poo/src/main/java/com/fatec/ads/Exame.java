package com.fatec.ads;

public class Exame {
    private String consulta;
    private String data;
    private String descritivo;

    public Exame() {
    }

    public Exame(String pConsulta, String pData, String pDescritivo) {
        setConsulta(pConsulta);
        setData(pData);
        setDescritivo(pDescritivo);
    }

    public String getConsulta() { return consulta; }
    public void setConsulta(String consulta) { this.consulta = consulta; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public String getDescritivo() { return descritivo; }
    public void setDescritivo(String descritivo) { this.descritivo = descritivo; }

    public void solicitar() {}
    public void consultar() {}

    public void mostrar() {
        System.out.println(">>>>>Exame<<<<<<<");
        System.out.println("Consulta: " + getConsulta());
        System.out.println("Data: " + getData());
        System.out.println("Descritivo: " + getDescritivo());
    }
}
