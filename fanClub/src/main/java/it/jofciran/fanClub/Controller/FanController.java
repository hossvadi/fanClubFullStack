package it.jofciran.fanClub.Controller;

import it.jofciran.fanClub.Model.Fan;
import it.jofciran.fanClub.Service.FanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fan")
public class FanController {
    @Autowired
    private FanService fanService;

    @PostMapping("/add")
    public String add(@RequestBody Fan fan) {
        fanService.saveFan(fan);
        return "New fan is added";
    }

    @GetMapping("getAll")
    public List<Fan> getAllFans() {
        return fanService.getAllFans();
    }
}
