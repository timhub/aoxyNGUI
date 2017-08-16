package com.aoxy.rest.breeding;

import com.aoxy.rest.breeding.model.BreedingResult;
import org.springframework.web.bind.annotation.*;

/**
 * Created by yangz on 2017/8/13.
 */
@RestController
@RequestMapping("/services")
@CrossOrigin(origins = "*")
public class BreedingRestService {

    @RequestMapping(value = "/breeding", method = RequestMethod.GET)
    public BreedingResult getSingleCalculationResult(@RequestParam(value = "maleId") String maleId,
                                                     @RequestParam(value = "femaleId") String femaleId) {
        //TODO Add calculation method invokes here to generate the result.
        BreedingResult result = new BreedingResult();
        return result;
    }
}
