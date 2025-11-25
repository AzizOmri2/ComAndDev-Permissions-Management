class CongesController < ApplicationController

  def index
    conges = DemandeConge.all
    render json: conges, status: 200
  end

  def create
    conge = DemandeConge.new(
      dateDebut: conge_params[:dateDebut],
      dateFin: conge_params[:dateFin],
      commentaire: conge_params[:commentaire],
      etat: "pending"  # default value
    )

    if conge.save
      render json: conge, status: 200
    else
      render json: { error: "Creating Error..." }, status: 422
    end
  end

  def show
    conge = DemandeConge.find_by(id: params[:id])
    if conge
      render json: conge, status: 200
    else
      render json: { error: "Demande Conge not found!" }, status: 404
    end
  end

  def update
    conge = DemandeConge.find_by(id: params[:id])
    if conge
      conge.update(
        dateDebut: params[:dateDebut], 
        dateFin: params[:dateFin], 
        commentaire: params[:commentaire],
        etat: "pending" # reset to pending if needed
      )
      render json: { message: "Demande Conge updated successfully." }, status: 200
    else
      render json: { error: "Demande Conge not found." }, status: 404
    end
  end

  # Accept a permission
  def accept
    conge = DemandeConge.find_by(id: params[:id])
    if conge
      conge.update(etat: "accepted")
      render json: { message: "Permission accepted successfully." }, status: 200
    else
      render json: { error: "Demande Conge not found." }, status: 404
    end
  end

  # Reject a permission
  def reject
    conge = DemandeConge.find_by(id: params[:id])
    if conge
      conge.update(etat: "rejected")
      render json: { message: "Permission rejected successfully." }, status: 200
    else
      render json: { error: "Demande Conge not found." }, status: 404
    end
  end

  def destroy
    conge = DemandeConge.find_by(id: params[:id])
    if conge&.destroy
      render json: { message: "Demande Conge deleted successfully." }, status: 200
    else
      render json: { error: "Demande Conge not found." }, status: 404
    end
  end

  private
  def conge_params
    params.require(:conge).permit(:dateDebut, :dateFin, :commentaire)
  end

end
