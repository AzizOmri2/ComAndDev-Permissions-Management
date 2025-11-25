class ChangeEtatToStringInDemandeConges < ActiveRecord::Migration[7.0]
  def change
    change_column :demande_conges, :etat, :string, default: "Pending"
  end
end