import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Eye, Download, CheckCircle, XCircle, Clock, X, FileText, Loader2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { generateQuotePDF } from '../../utils/pdfGenerator';

interface QuoteRequest {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  company_name: string;
  phone: string;
  message?: string;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  products: Array<{
    id: string;
    name: string;
    quantity: number;
    type: string;
    price: string;
  }>;
}

export default function QuoteRequests() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchQuoteRequests();
  }, [user, navigate]);

  const fetchQuoteRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (err: any) {
      console.error('Error fetching quote requests:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (requestId: string, newStatus: 'pending' | 'processing' | 'completed' | 'rejected') => {
    try {
      setUpdatingStatus(requestId);
      const { error } = await supabase
        .from('quote_requests')
        .update({ status: newStatus })
        .eq('id', requestId);

      if (error) throw error;
      
      setRequests(prev => prev.map(req => 
        req.id === requestId ? { ...req, status: newStatus } : req
      ));
    } catch (err: any) {
      console.error('Error updating status:', err);
      setError(err.message);
    } finally {
      setUpdatingStatus(null);
    }
  };

  const handleDownload = (request: QuoteRequest) => {
    try {
      const doc = generateQuotePDF(request);
      doc.save(`devis-${request.id.slice(0, 8)}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setError('Erreur lors de la génération du PDF');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="flex items-center gap-1 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-sm">
            <Clock className="w-4 h-4" />
            En attente
          </span>
        );
      case 'processing':
        return (
          <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-sm">
            <Clock className="w-4 h-4" />
            En cours
          </span>
        );
      case 'completed':
        return (
          <span className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-sm">
            <CheckCircle className="w-4 h-4" />
            Terminé
          </span>
        );
      case 'rejected':
        return (
          <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full text-sm">
            <XCircle className="w-4 h-4" />
            Rejeté
          </span>
        );
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDEDED] pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Demandes de devis</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Entreprise
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Produits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(request.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {request.first_name} {request.last_name}
                      </div>
                      <div className="text-sm text-gray-500">{request.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {request.company_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {request.products.length} produit(s)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(request.status)}
                        {updatingStatus === request.id && (
                          <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button 
                          onClick={() => setSelectedRequest(request)}
                          className="text-primary hover:text-primary/80"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDownload(request)}
                          className="text-primary hover:text-primary/80"
                        >
                          <FileText className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de détails */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Détails de la demande</h2>
              <button 
                onClick={() => setSelectedRequest(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Informations client */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Informations client</h3>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Nom complet</dt>
                    <dd className="text-sm text-gray-900">{selectedRequest.first_name} {selectedRequest.last_name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Entreprise</dt>
                    <dd className="text-sm text-gray-900">{selectedRequest.company_name}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-sm text-gray-900">{selectedRequest.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Téléphone</dt>
                    <dd className="text-sm text-gray-900">{selectedRequest.phone}</dd>
                  </div>
                </dl>
              </div>

              {/* Produits */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Produits demandés</h3>
                <ul className="space-y-3">
                  {selectedRequest.products.map((product, index) => (
                    <li key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          <p className="text-sm text-gray-500">Type: {product.type}</p>
                        </div>
                        <div className="text-right">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                            Quantité: {product.quantity}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">{product.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Message */}
              {selectedRequest.message && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Message</h3>
                  <p className="text-gray-600 whitespace-pre-wrap bg-gray-50 rounded-lg p-4">
                    {selectedRequest.message}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Actions</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleStatusUpdate(selectedRequest.id, 'processing')}
                    disabled={updatingStatus === selectedRequest.id}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                  >
                    Marquer en cours
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedRequest.id, 'completed')}
                    disabled={updatingStatus === selectedRequest.id}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
                  >
                    Marquer comme terminé
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(selectedRequest.id, 'rejected')}
                    disabled={updatingStatus === selectedRequest.id}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
                  >
                    Rejeter
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => handleDownload(selectedRequest)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Télécharger</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}