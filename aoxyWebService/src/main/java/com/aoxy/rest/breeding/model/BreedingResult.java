package com.aoxy.rest.breeding.model;

/**
 * Data bean for containing result for breeding calculation.
 * Created by yangz on 2017/8/13.
 */
public class BreedingResult {

    private String maleId;
    private String femaleId;
    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getMaleId() {
        return maleId;
    }

    public void setMaleId(String maleId) {
        this.maleId = maleId;
    }

    public String getFemaleId() {
        return femaleId;
    }

    public void setFemaleId(String femaleId) {
        this.femaleId = femaleId;
    }
}
