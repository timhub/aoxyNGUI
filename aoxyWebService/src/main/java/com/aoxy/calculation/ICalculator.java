package com.aoxy.calculation;

import com.aoxy.rest.breeding.model.BreedingResult;

/**
 * Created by yangz on 2017/3/19.
 */
public interface ICalculator {
        BreedingResult calculate(String maleId, String femaleId);
}
