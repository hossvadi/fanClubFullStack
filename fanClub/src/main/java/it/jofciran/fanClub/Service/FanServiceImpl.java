package it.jofciran.fanClub.Service;

import it.jofciran.fanClub.Model.Fan;
import it.jofciran.fanClub.Repository.FanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FanServiceImpl implements FanService{
    @Autowired
    private FanRepository fanRepository;

    @Override
    public Fan saveFan(Fan fan) {
        return fanRepository.save(fan);
    }

    @Override
    public List<Fan> getAllFans() {
        return fanRepository.findAll();
    }
}
