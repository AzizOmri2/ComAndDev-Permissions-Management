class CreateDemandeConges < ActiveRecord::Migration[7.0]
  def change
    create_table :demande_conges do |t|
      t.date :dateDebut
      t.date :dateFin
      t.text :commentaire

      t.timestamps
    end
  end
end
