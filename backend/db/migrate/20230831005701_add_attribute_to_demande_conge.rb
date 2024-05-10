class AddAttributeToDemandeConge < ActiveRecord::Migration[7.0]
  def change
    add_column :demande_conges, :etat, :boolean
  end
end
