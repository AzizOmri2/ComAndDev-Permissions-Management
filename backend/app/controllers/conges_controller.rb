class CongesController < ApplicationController


    def index
        conges = DemandeConge.all()
        render json:conges, status: 200
    end


    def new
        conge = DemandeConge.new
    end


    def create 
        conge = DemandeConge.new(
            dateDebut: conge_params[:dateDebut],
            dateFin: conge_params[:dateFin],
            commentaire: conge_params[:commentaire],
            etat: false
        )
        if conge.save
            render json:conge, status: 200
        else
            render json: { error: "Creating Error... "}
        end
    end


    def show
        conge = DemandeConge.find_by(id:params[:id])
        if conge
            render json:conge, status: 200
        else
            render json: { error: "Demande Conge not found!" }
        end
    end


    def update
        conge = DemandeConge.find(params[:id])
        if conge
            conge.update(dateDebut: params[:dateDebut], dateFin: params[:dateFin], commentaire: params[:commentaire], etat: false)
            render json: "Demande Conge updated successfully."
        else
            render json: { error: "Demande Conge not found." }
        end
    end


    def status
        conge = DemandeConge.find(params[:id])
        if conge
            conge.update(etat: true)
            render json: "Status Demande Conge updated successfully."
        else
            render json: { error: "Demande Conge not found." }
        end
    end


    def destroy
        conge = DemandeConge.find(params[:id])
        if conge
            conge.destroy
            render json: "Demande Conge deleted successfully."
        end
    end


    private 
    def conge_params
        params.require(:conge).permit(:dateDebut, :dateFin, :commentaire, false)
    end

end
