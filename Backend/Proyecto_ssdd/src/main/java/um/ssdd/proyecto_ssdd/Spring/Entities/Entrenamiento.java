package um.ssdd.proyecto_ssdd.Spring.Entities;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "entrenamientos")
public class Entrenamiento {
	
	@Id
	private String WID;
	
	private Binary entrenamiento;
	
	
	public Entrenamiento(Binary entrenamiento) {
		WID = "";
		this.entrenamiento = entrenamiento;
	}
	
	public Entrenamiento() {}


	public String getWID() {
		return WID;
	}


	public void setWID(String wID) {
		WID = wID;
	}


	public Binary getEntrenamiento() {
		return entrenamiento;
	}


	public void setEntrenamiento(Binary entrenamiento) {
		this.entrenamiento = entrenamiento;
	}







	
	
	

}
