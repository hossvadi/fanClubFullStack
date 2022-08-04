package it.jofciran.fanClub.Service;

import it.jofciran.fanClub.Model.Fan;

import java.util.List;

public interface FanService {
    public Fan saveFan(Fan fan);
    public List<Fan> getAllFans();
}
