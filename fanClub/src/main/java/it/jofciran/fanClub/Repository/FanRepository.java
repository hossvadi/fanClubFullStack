package it.jofciran.fanClub.Repository;

import it.jofciran.fanClub.Model.Fan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FanRepository extends JpaRepository<Fan, Integer> {
    
}
